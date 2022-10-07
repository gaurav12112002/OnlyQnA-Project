import React from 'react';
import { Routes, Route, useLocation, } from "react-router-dom";
import Login from '../auth/Login';
import FilterPost from './FilterPost';
import HomePage from './HomePage';
import Quora from './Quora';
import {AnimatePresence} from "framer-motion"
import Polls from './Polls';
import Unanswered from './Unanswered';
import { useSelector } from 'react-redux';
import { selectUser } from "../feature/userSlice";

function AnimationRoutes() {
    const user = useSelector(selectUser);

    let location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname} >

            <Route exact path='/' element={<Login />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/search' element={<Quora />} />
            <Route path='/filter' element={<FilterPost />} />
            <Route path='/polls' element={<Polls/>} />
            <Route path='/unanswered' element={<Unanswered/>} />
            

        </Routes>
        </AnimatePresence>
    )
}

export default AnimationRoutes