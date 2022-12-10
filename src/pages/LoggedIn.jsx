import React from 'react'
import Navbar from "../components/Navbar";
import bg from '../images/bg2.jpg'
import Typewriter from 'typewriter-effect'
import './style.css'
import { useNavigate } from 'react-router-dom';

export default function LoggedIn() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <section className=' logged-container text-white m-24'>
        <h1 className='logged-content text-7xl'><span className=' typing text-white'><Typewriter
            options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings:[
                    "Hello UserName"
                ]
            }}
        /></span> <span className=' writing text-5xl'>Welcome to <span className='text-purple-500'>IIIT-VERSE</span> </span></h1>
        <img className='bg' src={bg} alt="" />
        <div className="logged-btn flex">
            <button className=' lbtn mt-7 mr-5 border-purple-500 text-purple-500 text-lg bg-transparent border rounded-full pl-7 pr-7 pt-1 pb-2'>Explore</button>
            <button onClick={()=>{navigate('/')}} className=' lbtn mt-7  text-lg bg-transparent border rounded-full pl-7 pr-7 pt-1 pb-2'>Log Out</button>
        </div>
      </section>
      <div className="footer text-xs text-white absolute bottom-0 m-4">@2022_iiit-bh</div>
    </div>
  )
}
