import React from 'react'
import "./topBar.css"
import { Link } from 'react-router-dom';

export default function TopBar() {
  const user = false;
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
            <li className="topListItem">
              <Link to="/" className='link'>HOME</Link>
            </li>
            <li className="topListItem">
              <Link to = "" className='link'>ABOUT</Link>
            </li>
            <li className="topListItem">
              <Link to= "" className='link'>CONTACT</Link>
            </li>
            <li className="topListItem">
              <Link to= "/write" className='link'>WRITE</Link>
            </li>
            <li className="topListItem">
              {user && 'LOGOUT'}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img
              className='topImg' 
              src='https://plus.unsplash.com/premium_photo-1669315453542-68167fe4a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80'
              alt=''/>
            ) : (
              <ul className='topList'>
                <li className="topListItem">
                <Link to="/login" className='link'>LOGIN</Link>
                </li>
                <li className="topListItem">
                <Link to="/register" className='link'>REGISTER</Link>
                </li>
              
              </ul>
            )
          }

          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
