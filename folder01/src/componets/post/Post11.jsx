import React from 'react'
import "./post11.css"

export default function Post11() {
  return (
    <div className='post11'>
    <img className='postImg' src='https://www.gottman.com/wp-content/uploads/2013/09/The-Digital-Age-How-has-it-changed-your-life_HI.jpg'
    alt=''/>

    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Tech</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Living in the Digital Age: Navigating Life Amidst Technology </span>
          <hr/>
          <span className="postData">8 days ago</span>
    </div>
    <p className='postDescription'>In today's digital age, technology permeates every aspect of our lives. This amalgamation examines the profound impact of tech on our daily routines, relationships, and even our sense of self. It's a thought-provoking exploration of the ever-evolving relationship between humans and machines.</p>
</div>
  )
}
