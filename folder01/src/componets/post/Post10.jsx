import React from 'react'
import "./post10.css"

export default function Post10() {
  return (
    <div className='post10'>
    <img className='postImg' src='https://www.hucknalldispatch.co.uk/webimg/b25lY21zOmIyOTJlYTVkLTA5N2EtNDE4OC1hODMxLWZhNzBiZDJkMjRkNDo4YTBiODdkZC0zMmEwLTRiOWEtODNmNC1iMGMwNjVkYTMyNTA=.jpg?crop=3:2,smart&width=640&quality=65&enable=upscale'
    alt=''/>

    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Cinema</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Life on Screen: How Cinema Reflects Our Daily Existence</span>
          <hr/>
          <span className="postData">6 days ago</span>
    </div>
    <p className='postDescription'>Cinema has a unique ability to reflect, challenge, and celebrate the human experience. This blend explores how films, from gripping dramas to lighthearted comedies, mirror our joys, struggles, and aspirations. It's a cinematic journey through the various facets of life captured on the silver screen.</p>
</div>
  )
}
