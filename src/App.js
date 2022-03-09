import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Categories from './components/Categories';
import Category from './components/Category';
import MyQuiz from './components/MyQuiz';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:category_name' element={<Category />} />
        <Route path='/myquiz' element={<MyQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
