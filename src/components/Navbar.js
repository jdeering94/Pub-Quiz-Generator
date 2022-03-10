import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <Link className='navbar-item' to='/'>
          Home
        </Link>
        <Link className='navbar-item' to='/about'>
          About
        </Link>
        <Link className='navbar-item' to='/categories'>
          Categories
        </Link>
        <Link className='navbar-item' to='/myquiz'>
          My Quiz
        </Link>
        <Link className='navbar-item' to='/randomquiz'>
          Random Quiz
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
