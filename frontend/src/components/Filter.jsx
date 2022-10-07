//import { async } from '@firebase/util';
import React from 'react';
import  { useState, useEffect} from "react";
import Movie from './Movie';

import axios from 'axios';
import FilterFunc from './FilterFunc';

function Filter() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("");

  useEffect(() =>{
    axios
      .get("/api/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPopular(res.data);
        setFiltered(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },[]);
  

  
  return (
    <div className="App">
      <FilterFunc popular={popular}  setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
      <div className="postsss">
        <h1>Hello</h1>
        {filtered.map((post) =>{
          return <Movie key={post._id} post={post}/>
        })}
      </div>
    </div>
  )
}

export default Filter