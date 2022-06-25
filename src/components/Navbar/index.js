import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="container">
      <nav className='navbar'>
        <div className='logo'>
          <Link to="/"><span>Booking.com</span></Link>
        </div>
        <ul className='nav-item'>
          <li className='nav-list'>
            <Link to="/">Kaydol</Link>
          </li>
          <li className='nav-list'>
            <Link to="/">Giriş Yap</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar