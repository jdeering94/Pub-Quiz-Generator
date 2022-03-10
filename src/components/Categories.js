import React from 'react';
import { Link } from 'react-router-dom';

function Categories({ allCategories }) {
  return (
    <section className='categories-section'>
      <h1>All Categories</h1>
      <div className='categories-container'>
        {Object.keys(allCategories).map((category) => (
          <Link className='category-link' to={category} key={category}>
            <div className='category'>{allCategories[category]}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
