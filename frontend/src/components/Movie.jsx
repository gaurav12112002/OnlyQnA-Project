import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import Post from './Post'
//Post import karo;
function LastSeen({ date }) {
    return (
      <div>
        <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
      </div>
    )
  }

function Movie({post}) {
  return (
    <div>
        
        <h2>{post?.questionName}</h2>
        <p>{post?.category}</p>
        <h4>{post?.user?.userName}</h4>
        <LastSeen date={post?.createdAt} />
        
      

        
    </div>
  )
}

export default Movie