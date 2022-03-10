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
      const respWithId = resp.data.map((response) => {
        return { ...response, qId: uuidv4() };
      });
      console.log('respWithId', respWithId);
      // setQuestions(resp.data);
      setQuestions(respWithId);
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

  function saveQuestion(ques, ans, id) {
    // console.log(e.target);
    // if (id DOESNT exist) {
    // check for existing question(id):
    const filteredQuestions = savedQs.find((ques) => ques.qId === id);
    console.log('filteredQuestions', filteredQuestions);
    if (!filteredQuestions) {
      setSavedQs([
        ...savedQs,
        {
          // qId: uuidv4(),
          qId: id,
          category: category_name,
          question: ques,
          answer: ans
        }
      ]);
    }
  }

  return (
    <section className={`category-container ${category_name}`}>
      <h1>{allCategories[category_name]}</h1>
      <div className='all-questions-container'>
        {!questions ? (
          <p>Loading...</p>
        ) : (
          // console.log('questions', questions)
          questions.map(({ question, answer, qId }) => (
            <div
              className='questionContainer'
              key={question}
              // onClick={() => saveQuestion(question, answer)}
              onClick={() => saveQuestion(question, answer, qId)}
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
