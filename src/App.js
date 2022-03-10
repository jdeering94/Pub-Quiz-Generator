import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Categories from './components/Categories';
import Category from './components/Category';
import MyQuiz from './components/MyQuiz';
import RandomQuiz from './components/RandomQuiz';

function App() {
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories allCategories={allCategories} />} />
        <Route
          path='/categories/:category_name'
          element={<Category allCategories={allCategories} />}
        />
        <Route path='/myquiz' element={<MyQuiz />} />
        <Route path='/randomquiz' element={<RandomQuiz allCategories={allCategories} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
