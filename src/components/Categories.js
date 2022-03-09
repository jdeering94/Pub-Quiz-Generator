import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const allCategories = [
    'artliterature',
    'language',
    'sciencenature',
    'general',
    'fooddrink',
    'peopleplaces',
    'geography',
    'historyholidays',
    'entertainment',
    'toysgames',
    'music',
    'mathematics',
    'religionmythology',
    'sportsleisure',
  ];

  function cleanUpName(name) {
    // capitalised in css
    // Two worded categories to be spaced with a '&'
    return name;
  }

  return (
    <section className='categories-section'>
      <h1>All Categories</h1>
      <div className="categories-container">
        {allCategories.map((category) => (
          <Link className="category-link" to={category} key={category}>
            <div className="category">{cleanUpName(category)}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
