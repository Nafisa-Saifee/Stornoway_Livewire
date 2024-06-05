import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar=() => {
  return (
    <div>
        <nav className="navbar">
              <NavLink to='/'className="logo"><img src="https://assets.zyrosite.com/stornowayj2oil/STORNOWAY-mp8BzrvVN6U1ZJEn.svg" alt=""/></NavLink>
              <ul className="nav-list">
                <li className="nav-item"><NavLink to='/About'>About</NavLink></li>
                <li className="nav-item"><NavLink to='/Project'>Projects</NavLink></li>
                <li className="nav-item"><NavLink to='/Service'>Services</NavLink></li>
                <li className="nav-item"><NavLink to='/Career'>Careers</NavLink></li>
                <li className="nav-item"><NavLink to='/Contact'>Contacts</NavLink></li>
                <li className="nav-item"><NavLink to='/Login'>Log In</NavLink></li>
                <li className="nav-item"><NavLink to='/Sign'>Sign Up</NavLink></li>
                <li><NavLink to='/Logout'>Logout</NavLink></li>
                </ul>
        </nav>
  </div>
  )
};

export default Navbar;