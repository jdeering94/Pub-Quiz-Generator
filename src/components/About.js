import React from 'react';

function About() {
  return (
    <section className='about-body'>
      <h1>About Us</h1>
      <div className='about-text'>
        <p>Hello! Welcome to our pub quiz generator!</p>
        <p>
          It's pretty straightforward, just navigate to your category of preference, and a choice of
          thirty random questions will appear. Then, simply click on the questions you want to keep,
          and they will be added to your My Quiz page. If you've changed your mind you can also
          easily remove questions from the My Quiz page.
        </p>
        <p>
          Don't have the time or energy to pick each question? No problem! There is a Random Quiz
          option that generates up to 25 questions from random categories for you. Easy!
        </p>
      </div>
    </section>
  );
}

export default About;
