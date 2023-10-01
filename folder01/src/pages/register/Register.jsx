import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
                <label className='label'>Username</label>
                <input type="email" className='registerInput' placeholder='Enter Your Username' />
                <label>Email</label>
                <input type="email" className='registerInput' placeholder='Enter Your Email' />
                <label>Password</label>
                <input type="Password" className='registerInput' placeholder='Enter Your Password' />
                <label>Confirm Password</label>
                <input type="Password" className='registerInput' placeholder='Confirm Your Password' />
                <button className="registerButton">Register</button>
        </form>    
                 <button className="registerLoginButton">Login</button>
    </div>
  )
}
