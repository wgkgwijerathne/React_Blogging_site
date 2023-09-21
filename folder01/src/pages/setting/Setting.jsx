import Sidebar from "../../componets/sidebar/Sidebar";
import "./setting.css"

export default function setting() {
  return (
    <div className='setting'>
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form className="settingForm">
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img src="https://plus.unsplash.com/premium_photo-1669315453542-68167fe4a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80" alt="" />
                <label htmlFor="fileInput">
                <i className="settingPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Kavindu" />
                <label>Email</label>
                <input type="email" placeholder="kavindu@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
        
        </div>
  )
}
