import React from 'react';
import { triviaAPI } from '../lib/api';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Category({ allCategories, setNumQuestionsSaved }) {
  const [questions, setQuestions] = React.useState(null);
  const { category_name } = useParams();

  React.useEffect(() => {
    const getData = async () => {
      const resp = await triviaAPI(category_name);
      console.log('resp', resp.data);
      const respWithId = resp.data.map((response) => {
        return { ...response, qId: uuidv4() };
      });
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

    const numQuestions = JSON.parse(localStorage.savedQuestions).length;
    if (numQuestions !== 0) {
      setNumQuestionsSaved(numQuestions);
    } else {
      setNumQuestionsSaved(null);
    }
  }, [localStorage, savedQs, setNumQuestionsSaved]);

  function saveQuestion(ques, ans, id) {
    // check for existing question(id):
    const checkAddQuestion = savedQs.find((question) => question.qId === id);
    console.log('checkAddQuestion', checkAddQuestion);
    if (!checkAddQuestion) {
      setSavedQs([
        ...savedQs,
        {
          qId: id,
          category: category_name,
          question: ques,
          answer: ans
        }
      ]);
      console.log();
    } else {
      const filteredQuestions = savedQs.filter((question) => question.qId !== id);
      setSavedQs(filteredQuestions);
    }
  }

  return (
    <section className={`category-container ${category_name}`}>
      <h1>{allCategories[category_name]}</h1>
      <div className='all-questions-container'>
        {!questions ? (
          <h2>Loading...</h2>
        ) : (
          questions.map(({ question, answer, qId }) => (
            <div
              key={question}
              className={
                savedQs.find((ques) => ques.qId === qId)
                  ? 'saved questionContainer'
                  : 'questionContainer'
              }
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
