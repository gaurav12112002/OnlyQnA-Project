import React , {useState, useEffect} from 'react'
import QuoraBox from './QuoraBox'
import './css/Feed.css'
import Post from './Post'
import axios from 'axios'
import Search from './Search'
import { useLocation } from 'react-router-dom'

export const Feed = () => {
  let location = useLocation();
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios
      .get("/api/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="feed">
        
        {/* {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))} */}
      <Search/>
        
    </div>
  )
}
