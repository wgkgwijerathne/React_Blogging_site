import React from 'react'
import "./post9.css"

export default function Post9() {
  return (
    <div className='post9'>
    <img className='postImg' src='https://warontherocks.com/wp-content/uploads/2021/12/Sweden.jpg'
    alt=''/>

    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Sports</span>
            <span className="postCat">Tech</span>
        </div>
        <span className="postTitle">Game Changers: The Technological Advancements in Sports </span>
          <hr/>
          <span className="postData">5 days ago</span>
    </div>
    <p className='postDescription'>Technology has transformed the world of sports. From instant replays to wearable fitness trackers, this fusion explores how cutting-edge tech has enhanced athletic performance, fan engagement, and even how sports are watched and analyzed. It's a captivating look at the marriage of athleticism and innovation.</p>
</div>
  )
}
