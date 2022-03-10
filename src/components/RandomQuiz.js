import React from 'react';
import { randomQuiz } from '../lib/api';

function RandomQuiz({ allCategories }) {
  const [randomQuestions, setRandomQuestions] = React.useState(null);
  const [status, setStatus] = React.useState(null);

  const getData = async () => {
    const resp = await randomQuiz();
    console.log('resp', resp.data);
    setRandomQuestions(resp.data);
  };

  function handleButton(e) {
    e.preventDefault();
    setStatus('Generating...');
    getData();
  }

  return (
    <section className='myQuiz-section'>
      <div className='myQuiz-container'>
        <h1>Generate a Random Quiz!</h1>
        <div className='all-questions-container'>
          <button className='generate-quiz' onClick={handleButton}>
            Generate Quiz
          </button>
          {!randomQuestions ? (
            <h2>{status}</h2>
          ) : (
            randomQuestions.map(({ question, answer, category }) => (
              <div className='generated-questionContainer' key={question}>
                <span id='generated-category'>{allCategories[category]}</span>
                <span id='generated-question'>{question}</span>
                <span id='generated-answer'>{answer}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default RandomQuiz;
