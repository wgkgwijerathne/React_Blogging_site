import React from 'react'
import "./post3.css"

export default function Post3() {
  return (
    <div className='post3'>
    <img className='postImg' src='https://media.glamourmagazine.co.uk/photos/61f01473d01ac60c8df77df9/3:2/w_1920,h_1280,c_limit/SUMMERTRENDS_250122__%20(1).jpg'
    alt=''/>

    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Style</span>
        </div>
        <span className="postTitle">The Intersection of Art, Identity, and Fashion Trends </span>
          <hr/>
          <span className="postData">5 hour ago</span>
    </div>
    <p className='postDescription'>In the realm of style and fashion, we encounter a fusion of art, self-identity, and ever-evolving trends. This captivating intersection showcases how individuals use clothing and aesthetics to communicate their personality, culture, and creativity. From haute couture to street fashion, this exploration highlights the artistry behind our daily choices of attire..</p>
</div>
  )
}
