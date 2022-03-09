import React from 'react';
import { triviaAPI } from '../lib/api';
import { useParams } from 'react-router-dom';

function Category() {
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

  return (
    <section>
      <h1>{category_name}</h1>
      <div className="container">
        {!questions ? (
          <p>Loading...</p>
        ) : (
          questions.map((question) => (
            <div className="questionContainer" key={question.question}>
              <span id="q">{question.question}</span>
              <span id="a">{question.answer}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Category;
