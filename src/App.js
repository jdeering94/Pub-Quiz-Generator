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

  const localStorage = window.localStorage;

  const currentState = localStorage.savedQuestions
    ? JSON.parse(localStorage.savedQuestions).length
    : null;

  const [numQuestionsSaved, setNumQuestionsSaved] = React.useState(currentState);

  return (
    <BrowserRouter>
      <Navbar numQuestionsSaved={numQuestionsSaved} setNumQuestionsSaved={setNumQuestionsSaved} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories allCategories={allCategories} />} />
        <Route
          path='/categories/:category_name'
          element={
            <Category allCategories={allCategories} setNumQuestionsSaved={setNumQuestionsSaved} />
          }
        />
        <Route
          path='/myquiz'
          element={
            <MyQuiz allCategories={allCategories} setNumQuestionsSaved={setNumQuestionsSaved} />
          }
        />
        <Route path='/randomquiz' element={<RandomQuiz allCategories={allCategories} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
