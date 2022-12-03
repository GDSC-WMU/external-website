import React from 'react'
import './index.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <a href='/' id='logo-container'>
                <img src='logo.jpg' alt='GDSC WMU' id='logo'></img>
            </a>
            <div id='buttons'>
                <a id='home' href='/'>Home</a>
                <a id='events' href='/events'>Events</a>
                <a id='about' href='/about'>About</a>
                <a id='join' href='/join'>Join</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
