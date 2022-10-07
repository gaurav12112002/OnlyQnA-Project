
import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import axios from "axios";
import Post from "./Post";
import QuoraHeader from './QuoraHeader'
import './css/Unanswered.css'

function Unanswered({post}) {
    const [loading, setLoading] = useState(false);
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);
    //const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            const res = await axios.get(
                "/api/questions"
            );
            //console.log(res.data.reverse());
            setPosts(res.data);
            setLoading(false);
        };

        loadPosts();
    }, []);


  return (
    <div className="Unanswered">
        <QuoraHeader/>

        <div className="display">
            <h1>Contribute to Answers</h1>
        <div className="contentA">
                




                {loading ? (
                    <h4>Loading</h4>
                    
                ) : (
                    posts.filter((value)=>{
                        if(value.allAnswers.length === 0 
                            ){
                            return value;
                        }else{
                            return ;
                        }
                    })


                       /* .filter((value) => {
                            if (searchTitle === "") {
                                return value;
                            } else if (
                                value.questionName.toLowerCase().includes(searchTitle.toLowerCase())
                            ) {
                                return value;
                            }
                        })*/
                        .map((post, index) => (
                            <Post key={index} post={post} />
                            
                        )
                        ) 
                )}




            </div>
            </div>
        
            
        

        
    </div>
  )
}

export default Unanswered
