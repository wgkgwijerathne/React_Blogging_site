import React from 'react'
import "./post.css"
import {Link} from "react-router-dom"


export default function Post({post}) {
  return (
    <div className='post'>
      {post.photo && (
        <img className='postImg' 
        src={post.photo}
        alt=''
        />
      )}
        
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map((c) => (
                   <span className="postCat">(c.name)</span>
              ))}
               
            </div>
            <Link to={`/posts/${post._id}`}className='link'> 
            <span className="postTitle">
                {post.title}
            </span>
            </Link>

              <hr/>
              <span className="postData">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='postDescription'>
          {post.desc}
        </p> 
    </div>
  )
}
