import React from 'react'
import Navbar from "../components/Navbar";
import './style.css'
import bg from '../images/bg2.jpg'
// import LoginButton from '../components/login';
// import { useAuth0 } from "@auth0/auth0-react";
// import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export default function Home() {
  // const { loginWithRedirect } = useAuth0();
  let navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <section className=' container text-white m-24'>
        <h1 className='content text-7xl'>Connection is <br /><span className=' text-purple-500'>evolving</span> and so <br />we are</h1>
        <img className='bg' src={bg} alt="" />
        <button onClick={()=>{navigate('/loggedin')}} className=' lbtn mt-7 mr-5 border-purple-500 text-purple-500 text-lg bg-transparent border rounded-full pl-7 pr-7 pt-1 pb-2'> Sign In</button>
      </section>
      <div className="footer text-xs text-white absolute bottom-0 m-4">@2022_iiit-bh</div>
    </div>
  )
}
