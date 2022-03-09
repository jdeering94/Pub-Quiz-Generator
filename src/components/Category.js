import React from 'react';
import { triviaAPI } from '../lib/api';
import { useParams } from 'react-router-dom';

function Category() {
  const [questions, setQuestions] = React.useState(null);
  const { category } = useParams();

  React.useEffect(() => {
    const getData = async () => {
      const resp = await triviaAPI(category);
      console.log('resp', resp);
      setQuestions(resp);
    };
    getData();
  }, [category]);

  console.log('questions', questions);

  return (
    <section>
      <h1>{category}</h1>
      <div className="container">
        {!questions ? (
          <p>Loading...</p>
        ) : (
          questions.map((question) => (
            <div className="questionContainer" key={question.question}>
              {question.question}
              {question.answer}
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Category;
