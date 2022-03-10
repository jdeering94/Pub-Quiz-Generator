import React from 'react';

function About() {
  return (
    <section className="about-body">
      <h1>About Page</h1>
      <div className="about-text">
        <p>Hello! Welcome to our pub quiz generator!</p>
        <p>
          It's pretty straightforward, just navigate to your category of
          preference, and a choice of thirty random questions will appear. Then,
          simply click on the questions you want to keep, and they will be added
          to your basket.
        </p>
        <p>
          Don't have the time to pick each question? No problem! In the basket
          there is a random quiz option that generates 25 questions from random
          categories. Easy!
        </p>
      </div>
    </section>
  );
}

export default About;
