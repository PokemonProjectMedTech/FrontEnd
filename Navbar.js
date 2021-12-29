import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {


  return (
    
    <nav className='navbar'>
        <h3>Logo</h3>
        <ul className='nav-links'>
            <Link style={navStyle} to="/list">
                <li>Pokemon List</li>
            </Link>
            <Link>
                <li to="/add">Add New Pokemon</li>
            </Link>

        </ul>
    </nav>
  );
}

export default Navbar;