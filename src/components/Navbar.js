import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='nav-container' >
        <text className='nav-text'>Andrew's Portfolio</text>
        <ul className='nav-list'>
          <li><Link className='nav-link' to="/">Home</Link></li>
          <li><Link className='nav-link' to="/Education">Education</Link></li>
          <li><Link className='nav-link' to="/Skills">Skills</Link></li>
          <li><Link className='nav-link' to="/Projects">Projects</Link></li>
        </ul>
    </div>
  )
}
