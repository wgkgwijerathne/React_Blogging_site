import React from 'react'
import "./write.css"

export default function Write() {
  return (
    <div className='write'>
        <img className ="writeImg" src="https://scx2.b-cdn.net/gfx/news/hires/2019/1-evolution.jpg" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i class="writeIcon fas fa-plus"></i>
                </label>
                <input type='file' id='fileInput' className='fileinputt'/>
                <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story..' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
