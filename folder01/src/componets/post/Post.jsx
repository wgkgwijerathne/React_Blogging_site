import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src='https://scx2.b-cdn.net/gfx/news/hires/2019/1-evolution.jpg'
        alt=''/>

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Exploring the Beauty and Complexity of Human Existence </span>
              <hr/>
              <span className="postData">1 hour ago</span>
        </div>
        <p className='postDescription'>This exploration takes us on a profound journey through the multifaceted dimensions of human life. It's a deep dive into the intricate interplay of emotions, relationships, aspirations, and the very essence of what it means to be human. From the mundane to the extraordinary, this journey reveals the beauty and depth of human existence in all its glory and complexity.</p>
    </div>
  )
}
