import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
                <label>Email</label>
                <input type="email" className='loginInput' placeholder='Enter Your Email' />
                <label>Password</label>
                <input type="Password" className='loginInput' placeholder='Enter Your Password' />
                <button className="loginButton">Login</button>
        </form>    
                 <button className="loginRegisterButton">
                <Link to = "/register" className='link'>Register</Link></button>
    </div>
  )
}
