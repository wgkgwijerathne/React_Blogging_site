import Header from "../../header/Header"
import "./home.css"
import Posts from "../../componets/posts/Posts"
import Sidebar from "../../componets/sidebar/Sidebar"
import { useEffect } from "react";
import React, { useState } from 'react';
import axios from 'axios';



export default function Home() {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts");
        // Assuming the response data is an array of posts, you can update the state like this:
        setPosts(res.data);
        console.log(res);
      } catch (error) {
        // Handle any errors here, e.g., show an error message.
        console.error("Error fetching posts:",error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
    <Header />
    <div className="home">
      
    <Posts />
    <Sidebar />

    </div>
    </>
  )
}
