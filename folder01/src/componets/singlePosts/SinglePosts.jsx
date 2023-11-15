import React, { useEffect, useState } from 'react'
import "./singlePosts.css"
import { Link, useLocation } from 'react-router-dom'
import axios from "axios"



export default function SinglePosts() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${path}`);
      setPost(res.data)
      console.log(res)
    };
    getPost()
  }, [path]);


  return (
    <div className='SinglePosts'>
        <div className="singlePostWrapper">
          {post.photo && (
            <img
              src = {post.photo}
              alt=""
              className='singlePostImg' />
          )}
      
        
        <h1 className="singlePostTitle"> 
          {post.title}
        <div className="singlePostsEdit">
        <i className="SinglePostsIcon fa-solid fa-pen-to-square"></i>
        <i className="SinglePostsIcon fa-solid fa-trash"></i>
        </div>
      </h1>
    <div className="singlePostInfo">
      <span className="singlePostsAuthor">
        Author : 
        <Link to={`/?user=${post.username}`} className="link">
           <b>{post.username}</b>
        </Link>
      </span>
      <span className="singlePostsData">
        {new Date(post.createdAt).toDateString()}
      </span>
    </div>
    <p className='singlePostDescription'>
           {post.desc}
              </p>
          </div>
        </div>
       )
    }
