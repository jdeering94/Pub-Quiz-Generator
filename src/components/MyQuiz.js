import React from 'react';
import { randomQuiz } from '../lib/api';

function MyQuiz() {
  const [randomQuestions, setRandomQuestions] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const resp = await randomQuiz();
      console.log('resp', resp.data);
      setRandomQuestions(resp.data);
    };
    getData();
  }, []);

  return (
    <section>
      <h1>My Quiz</h1>
    </section>
  );
}

export default MyQuiz;
