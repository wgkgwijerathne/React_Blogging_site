import React from 'react'
import "./single.css"
import Sidebar from '../../componets/sidebar/Sidebar'
import SinglePosts from '../../componets/singlePosts/SinglePosts'


export default function Single() {
  return (
    <div className='single'>    
        <SinglePosts/>
        <Sidebar />

        
    </div>
  )
}
