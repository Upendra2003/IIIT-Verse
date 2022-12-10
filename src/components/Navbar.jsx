import React from 'react'
import Logo from '../images/meta.png'
import './style.css'

export default function Navbar() {
  return (
    <div>
      <nav className=' navbar flex justify-between m-5'>
        <div className="logo w-24 xs:w-10 flex cursor-pointer leading-10">
            <img src={Logo} alt="" />
            <div className="line w-2 h-4 bg-slate-50"></div>
            <h5 className=' logo-text text-xl mt-2 -ml-2 text-cyan-400 hover:text-white flex flex-row'>IIITVERSE</h5>
        </div>
        <div className="list">
            <ul className='lists flex text-white'>
                <li className='m-3 text-cyan-400'><a href="/">Who we are</a></li>
                <li className='m-3 hover:text-cyan-400'><a href="/">What we build</a></li>
                <li className='m-3 hover:text-cyan-400'><a href="/">Our actions</a></li>
                <li className='m-3 hover:text-cyan-400'><a href="/">Community</a></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}
