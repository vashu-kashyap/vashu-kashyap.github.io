import React, { useState } from 'react'
import './navbar.css'

export default function Navbar() {

 const[menuopen,setMenuopen] = useState('./menuopen.svg')
 const[showmenu,setShowmenu] = useState('nav-menu-container scale-up-center')
 
 const handletoggle = ()=>{
    if (menuopen === './menuopen.svg') {
        setMenuopen('./menuclose.svg')
        setShowmenu('nav-menu-container scale-up-center open-menu')
    } else {
        setMenuopen('./menuopen.svg')
        setShowmenu('nav-menu-container scale-up-center')
    }
 }

  return (
    <>
     <nav className='navbar'>
        <div className="nav-brand">
            <a href="/">Vashu</a>
        </div>
        <div className={showmenu}>
            <ul className="nav-menu">
                <li className="nav-link"><a href="/">Home</a></li>
                <li className="nav-link"><a href="/">About</a></li>
                <li className="nav-link"><a href="/">Work</a></li>
                <li className="nav-link"><a href="/">Contact</a></li>
            </ul>
        </div>
        <div className="social-menu-container">
            <ul className="social-menu">
                <li className='social-link'>
                    <a href="https://www.instagram.com/im.vashukashyap/" et='_blank'><i className="fa-brands fa-instagram"  title='Instagram'></i></a>
                </li>
                <li className="social-link">
                    <a href="https://github.com/vashu-kashyap" et='_blank'><i className="fa-brands fa-github"  title='Github'></i></a>
                </li>
                <li className="social-link">
                    <a href="https://www.linkedin.com/in/im-vashukashyap/" et='_blank'><i className="fa-brands fa-linkedin-in"  title='Linkedin'></i></a>
                </li>

            </ul>
        </div>

        <div className="menu-btn" >
            <button onClick={handletoggle}><img src={menuopen} alt="humberger-menu" /></button>
        </div>
     </nav>   
    </>
  )
}
