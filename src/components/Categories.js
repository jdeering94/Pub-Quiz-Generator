import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  // const allCategories = [
  //   'artliterature',
  //   'language',
  //   'sciencenature',
  //   'general',
  //   'fooddrink',
  //   'peopleplaces',
  //   'geography',
  //   'historyholidays',
  //   'entertainment',
  //   'toysgames',
  //   'music',
  //   'mathematics',
  //   'religionmythology',
  //   'sportsleisure'
  // ];
  const allCategories = {
    artliterature: 'Art & Literature',
    language: 'Language',
    sciencenature: 'Science & Nature',
    general: 'General',
    fooddrink: 'Food & Drink',
    peopleplaces: 'People & Places',
    geography: 'Geography',
    historyholidays: 'History & Holidays',
    entertainment: 'Entertainment',
    toysgames: 'Toys & Games',
    music: 'Music',
    mathematics: 'Mathematics',
    religionmythology: 'Religion & Mythology',
    sportsleisure: 'Sports & Leisure'
  };

  return (
    <section className='categories-section'>
      <h1>All Categories</h1>
      <div className='categories-container'>
        {Object.keys(allCategories).map((category) => (
          <Link className='category-link' to={`:${category}`} key={category}>
            <div className='category'>{allCategories[category]}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
