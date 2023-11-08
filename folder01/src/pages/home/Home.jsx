import Header from "../../header/Header"
import "./home.css"
import Posts from "../../componets/posts/Posts"
import Sidebar from "../../componets/sidebar/Sidebar"
import { useEffect } from "react";
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";



export default function Home() {
  
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts" + search);
        // Assuming the response data is an array of posts, you can update the state like this:
        setPosts(res.data);
        
      } catch (error) {
        // Handle any errors here, e.g., show an error message.
        console.error("Error fetching posts:",error);
      }
    };

    fetchPosts();
  }, [search]);

  return (
    <>
    <Header />
    <div className="home">
      
    <Posts posts = {posts}/>
    <Sidebar />

    </div>
    </>
  )
}
