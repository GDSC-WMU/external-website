import React from 'react'
import './index.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <a href='./home' id='logo-container'>
                <img src='logo.jpg' alt='GDSC WMU' id='logo'></img>
            </a>
            <div id='buttons'>
                <a id='home' href='./home'>Home</a>
                <a id='events' href='./home'>Events</a>
                <a id='about' href='./home'>About</a>
                <a id='join' href='./home'>Join</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
