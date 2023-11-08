import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import axios from 'axios';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async() => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    }

  getCats();
}, [] );


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
          {cats.map((c) => (
            <li className="sidebarListItem">{c.name}</li>
          ))}
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
