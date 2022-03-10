import React from 'react';
import { triviaAPI } from '../lib/api';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Category({ allCategories }) {
  const [questions, setQuestions] = React.useState(null);
  const { category_name } = useParams();

  React.useEffect(() => {
    const getData = async () => {
      const resp = await triviaAPI(category_name);
      console.log('resp', resp.data);
      setQuestions(resp.data);
    };
    getData();
  }, [category_name]);

  const localStorage = window.localStorage;

  function getState() {
    if (localStorage.savedQuestions) {
      return JSON.parse(localStorage.savedQuestions);
    } else {
      return [];
    }
  }

  const [savedQs, setSavedQs] = React.useState(getState());

  React.useEffect(() => {
    localStorage.setItem('savedQuestions', JSON.stringify(savedQs));
    // console.log('localStorage:', localStorage.savedQuestions);
  }, [localStorage, savedQs]);

  function saveQuestion(ques, ans) {
    setSavedQs([
      ...savedQs,
      {
        qId: uuidv4(),
        data: { category: category_name, question: ques, answer: ans }
      }
    ]);
  }

  return (
    <section className={`category-container ${category_name}`}>
      <h1>{allCategories[category_name]}</h1>
      <div className='all-questions-container'>
        {!questions ? (
          <p>Loading...</p>
        ) : (
          questions.map(({ question, answer }) => (
            <div
              className='questionContainer'
              key={question}
              onClick={() => saveQuestion(question, answer)}
            >
              <span id='question'>{question}</span>
              <span id='answer'>{answer}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Category;
