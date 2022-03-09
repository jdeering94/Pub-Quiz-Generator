import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/categories'>Categories</Link>
        <Link to='/myquiz'>My Quiz</Link>
      </nav>
    </header>
  );
}

export default Navbar;
