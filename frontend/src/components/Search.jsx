import React, { useState, useEffect } from "react";
import Sh from '@mui/icons-material/SearchOutlined';
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import axios from "axios";
import Post from "./Post";
import QuoraHeader from "./QuoraHeader";
import QuoraBox from "./QuoraBox";
import Sidebar from "./Sidebar";
import SidebarOptions from "./SidebarOptions";
import WidgetContent from "./WidgetContent";
import { Feed } from "./Feed";
import "./css/Search.css";

import { motion } from "framer-motion";

export const Search = () => {
    const [loading, setLoading] = useState(false);
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            const res = await axios.get(
                "/api/questions"
            );
            console.log(res.data.reverse());
            setPosts(res.data);
            setLoading(false);
        };

        loadPosts();
    }, []);

    return (
        <div className="search"
        /*initial={{height:"100%"}}
        animate={{height:"100%"}}
        exit={{y: 1000, transition:{duration:0.6}}}*/
        >
            {/* <QuoraHeader /> */}






            <div className="content">
                <div className='qHeader__input'>
                    <Sh />
                    <input style={{ width: "100%", height: "45px" }} type="text" placeholder='Search Questions'
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />

                </div>




                {loading ? (
                    <h4>Loading ...</h4>
                    
                ) : (
                    posts
                        .filter((value) => {
                            if (searchTitle === "") {
                                return value;
                            } else if (
                                value.questionName.toLowerCase().includes(searchTitle.toLowerCase())
                            ) {
                                return value;
                            }
                        })
                        .map((post, index) => (
                            <Post key={index} post={post} />
                        )
                        )
                )}




            </div>





        </div>
    );
}

export default Search;