import React from 'react'
import "./post2.css"

export default function Post2() {
  return (
    <div className='post2'>
    <img className='postImg' src='https://c8.alamy.com/comp/2G1AYX2/girl-with-microphone-singing-among-her-friends-with-musical-instruments-2G1AYX2.jpg'
    alt=''/>

    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
        </div>
        <span className="postTitle">Harmonizing Emotions and Expressions Through Melodies </span>
          <hr/>
          <span className="postData">2 hour ago</span>
    </div>
    <p className='postDescription'>Music transcends language barriers to touch the core of our emotions. It's a universal art form that allows us to express our deepest feelings, celebrate life's joys, and find solace in times of sorrow. Through melodies, harmonies, and lyrics, this exploration celebrates the emotional resonance and creative expressions that music brings into our lives.</p>
</div>
  )
}
