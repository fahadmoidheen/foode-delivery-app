import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" />
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          Home
        </Link>
        <a href='#menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
          Menu
        </a>
        <a href='#mobile-app' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
          Mobile App
        </a>
        <a href='#contact' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
          Contact
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <Link to='/cart' className="navbar-basket-icon"> 
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </Link>
        <button onClick={() => setShowLogin(true)}> Sign In</button>
      </div>
    </div>
  )
}

export default Navbar