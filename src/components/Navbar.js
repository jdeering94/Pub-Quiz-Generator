import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/categories'>Categories</Link>
      <Link to='/myquiz'>My Quiz</Link>
    </header>
  );
}

export default Navbar;
