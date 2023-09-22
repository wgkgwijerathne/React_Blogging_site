import React from 'react'
import "./topBar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
          <i class="topIcon fa-brands fa-square-facebook"></i>
          <i class="topIcon fa-brands fa-square-twitter"></i>
          <i class="topIcon fa-brands fa-square-pinterest"></i>
          <i class="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img
          className='topImg' 
          src='https://plus.unsplash.com/premium_photo-1669315453542-68167fe4a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80'
          alt=''/>
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
