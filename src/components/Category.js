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

  function saveQuestion(e) {
    // console.log(e);
    // console.log('etarget:', e.target);
    // console.log('category', e.target.parentNode.parentNode.classList[1]);
    // console.log('etargetchildnodes', e.target.childNodes);
    // console.log('question', e.target.childNodes[0].innerText);
    // console.log('answer', e.target.childNodes[1].innerText);
    const ques = e.target.childNodes[0].innerText;
    const ans = e.target.childNodes[1].innerText;
    const cat = e.target.parentNode.parentNode.classList[1];
    // setSavedQs({ ...savedQs, category: cat, question: ques, answer: ans });
    setSavedQs([
      ...savedQs,
      {
        qId: uuidv4(),
        data: { category: cat, question: ques, answer: ans }
      }
    ]);

    localStorage.setItem('savedQuestions', JSON.stringify(savedQs));
  }

  console.log('localStorage:', localStorage.savedQuestions);
  // console.log('JSON parsed q:', JSON.parse(localStorage.savedQuestions));

  return (
    <section className={`category-container ${category_name}`}>
      <h1>{allCategories[category_name]}</h1>
      <div className='all-questions-container'>
        {!questions ? (
          <p>Loading...</p>
        ) : (
          questions.map((question) => (
            <div className='questionContainer' key={question.question} onClick={saveQuestion}>
              <span id='question'>{question.question}</span>
              <span id='answer'>{question.answer}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Category;
