import React, { useState, useEffect } from "react";
import MenuItem from '@mui/material/MenuItem';
import "./css/FilterPost.css"
import axios from "axios";
import Post from "./Post";
import QuoraHeader from "./QuoraHeader";
import QuoraBox from "./QuoraBox";
import Sidebar from "./Sidebar";
import SidebarOptions from "./SidebarOptions";
import WidgetContent from "./WidgetContent";
import { Feed } from "./Feed";
import "./css/Search.css";
import { FormControl, InputLabel, Select } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { Widget } from "./Widget";

export const FilterPost = () => {
    const general = "General";
    const sports = "Sports";
    const canteen = "Canteen";
    const lab = "Labs";
    const food = "Food near XIE";
    const staff = "Staff & Faculty";
    const events = "Events & Fests";
    const places = "Places nearby";
    const admis = "Admissions";
    const course = "Courses";
    const [loading, setLoading] = useState(false);
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
        <div className="Filter">
            <QuoraHeader />
            <motion.div className="filter"
                initial={{ opacity: 0 }}
                animate={{ opacity: "100%" }}
                exit={{ opacity:0}}
            >
                {/* <QuoraHeader /> */}




                {/* <Sidebar/> */}
                <div className="search">
                

                    <div className="content">
                        

                        {/* <h3>Filter Category</h3> */}
                        {/* <input
                    style={{ width: "45%", height: "30px" }}
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchTitle(e.target.value)}
                /> */}
                        <Box sx={{ minWidth: 200, marginBottom: 3 ,marginTop: 2,}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Filter Category</InputLabel>
                                <Select

                                    value={searchTitle}
                                    label="Filter Category"

                                    onChange={(e) => setSearchTitle(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value={general}>General</MenuItem>
                                    <MenuItem value={canteen}>Canteen</MenuItem>
                                    <MenuItem value={sports}>Sports</MenuItem>
                                    <MenuItem value={lab}>Labs in XIE</MenuItem>
                                    <MenuItem value={food}>Food near XIE</MenuItem>
                                    <MenuItem value={staff}>Staff and Faculty</MenuItem>
                                    <MenuItem value={events}>Events and Fests</MenuItem>
                                    <MenuItem value={admis}>Admissions</MenuItem>
                                    <MenuItem value={course}>Courses</MenuItem>
                                    <MenuItem value={places}>Places nearby</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>




                        {loading ? (
                            <h4>Loading ...</h4>
                        ) : (
                            posts
                                .filter((value) => {
                                    if (searchTitle === "") {
                                        return value;
                                    } else if (
                                        value.category.toLowerCase().includes(searchTitle.toLowerCase())
                                    ) {
                                        return value;
                                    }
                                })
                                .map((post, index) => (
                                    <Post key={index} post={post} />
                                )
                                )
                        )
                        }

                        

                    </div>
                    
                </div>
                {/* <Widget/> */}





            </motion.div>
        </div>
    );
}

export default FilterPost;