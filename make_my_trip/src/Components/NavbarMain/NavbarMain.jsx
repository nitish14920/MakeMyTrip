// import logo from './mmtLogoWhite.png'
import React from 'react'
import './NavbarMain.css'
import { Link } from "react-router-dom";

const logo = window.location.origin + "/mmtLogoWhite.png"

function NavbarMain() {
    return (
        <div className='Header'>
             <div className='logoImage'>
                 <Link to='/'>
                 <img target = 'www.linkedin.com' src={logo} height='40px' width='100px' />
                 </Link>
                 </div>
             <div>
                 <ul>
                     <li className='test'>pavan</li>
                 </ul>
             </div>
        </div>
    )
}

export default NavbarMain
