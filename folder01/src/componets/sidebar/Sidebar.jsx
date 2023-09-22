import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span><br/>
        <img className='sidebarImg' src='https://cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png' alt=''/>
            <p className='sidebarParagraph'>
              
              Absolutely thrilled with my experience on 
              Moonbet! The cryptocurrency integration makes 
              everything so smooth Absolutely thrilled with my experience on 
              Moonbet! The cryptocurrency integration makes 
              everything so smoothAbsolutely thrilled with my experience on 
              Moonbet! 
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
          <i class="sidebarIcon fa-brands fa-square-facebook"></i>
          <i class="sidebarIcon fa-brands fa-square-twitter"></i>
          <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i class="sidebarIcon fa-brands fa-square-instagram"></i>
          </div>
        </div>
    </div>
  )
}
