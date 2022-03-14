import React from 'react';
import { randomQuiz } from '../lib/api';

function RandomQuiz({ allCategories }) {
  const [randomQuestions, setRandomQuestions] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  // const [quizChosen, setQuizChosen] = React.useState(null);

  const getData = async (numQs) => {
    const resp = await randomQuiz(numQs);
    console.log('resp', resp.data);
    setRandomQuestions(resp.data);
  };

  function handleButton(e) {
    e.preventDefault();
    // console.log("parent element's childnodes:", e.target.parentElement.childNodes); // nodelist (array)
    const allButtons = e.target.parentElement.childNodes;
    allButtons.forEach((btn) => btn.classList.remove('selected'));
    e.target.classList.add('selected');
    setStatus('Generating...');
    getData(e.target.value);
  }

  return (
    <section className='myQuiz-section'>
      <div className='myQuiz-container'>
        <h1>Generate a Random Quiz!</h1>
        <div className='all-questions-container'>
          <div className='buttons-container'>
            <button className='generate-quiz' onClick={handleButton} value='5'>
              Generate 5 Questions
            </button>
            <button className='generate-quiz' onClick={handleButton} value='10'>
              Generate 10 Questions
            </button>
            <button className='generate-quiz' onClick={handleButton} value='25'>
              Generate 25 Questions
            </button>
          </div>
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
