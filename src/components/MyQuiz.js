import React from 'react';

function MyQuiz({ allCategories }) {
  const [myQuestions, setMyQuestions] = React.useState(getState());

  function getState() {
    if (localStorage.savedQuestions) {
      return JSON.parse(localStorage.savedQuestions);
    } else {
      return [];
    }
  }

  function handleButton() {
    localStorage.removeItem('savedQuestions');
    setMyQuestions(getState);
  }

  return (
    <section className="myQuiz-section">
      <div className="myQuiz-container">
        <h1>My Quiz</h1>
        <div className="myQuizContainer">
          <button className="reset-quiz" onClick={handleButton}>
            Reset Quiz
          </button>
          {!myQuestions ? (
            <p>Loading Your Quiz!</p>
          ) : (
            myQuestions.map(({ question, answer, category }) => (
              <div className="generated-questionContainer" key={question}>
                <span id="generated-category">{allCategories[category]}</span>
                <span id="generated-question">{question}</span>
                <span id="generated-answer">{answer}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default MyQuiz;
