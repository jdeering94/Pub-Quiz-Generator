# Pub Quiz Generator

Our pub quiz generator lets you browse over 400 quiz questions across 14 categories from History & Holidays and Mathematics to Music and Games. Add as many questions as you'd like to your basket, or have our application generate a random quiz (of 5, 10 or 25 questions) for you! This application calls 17 endpoints from an external API, and was created by Joe Deering & [Emily Daykin](https://github.com/emilydaykin)
over a 48-hour period.

Link: https://pub-quiz-generator-ga-sei62.netlify.app/

## The Brief

- **Consume a public API** – this could be anything but it must make sense for your project.
- **Have several components** - organise your components in the components folder in your src directory.
- **The app can have a router** - with several "pages", this is up to your discretion and if it makes sense for your project.
- **Include wireframes** - that you designed before building the app.
- **Be deployed online** and accessible to the public - we will deploy the apps together at the end of the project.

## Site Overview

<p>
<img src="./src/assets/homepage-image.jpeg" />
</p>
<p align="center">
<img src="./src/assets/categories-image.jpeg" width="47%"/>
<img src="./src/assets/category-image.jpeg" width="47%"/>
</p>
<p align="center">
<img src="./src/assets/myquiz-image.jpeg" width="47%"/>
<img src="./src/assets/randomquiz-image.jpeg" width="47%"/>
</p>
 
## Technologies Used:
 
- Front End: React
 - SPA Routing and Components
 - Packages: axios for API handling, UUID4 for unique IDs
- Styling: Sass
- Version Control: Git
- Deployment: Netlify
 
## Installation Instructions:
 
- Clone repo --> `npm install` --> `npm start`
 
## Features:
- Dive into over 30 randomised questions per category
- Browse questions from 14 different categories
- Add or remove question-answer cards to/from your basket, and save them for later
- Generate a random quiz (of 5, 10 or 25 questions)
 
## General Approach:
 
Initially, we decided to work with a free API from cocktail DB. Upon working with it and realising that our goals were somewhat limited by the API, and overshadowed by the corresponding website, we changed the API to one from API ninja, called trivia. Our new aim was to create a website that could be used to form a list of trivia questions that you could use to make a pub quiz, the user would navigate via category to a random selection of questions, and pick those they wanted to compile into a list, which the site would display. The latter functions being our stretch goals.
 
We began by pseudocoding out the necessary code and design of the different components. Our MVP was designated as a website that would display different trivia categories, and when they are clicked, they link to a new page that displays a selection of 30 questions from that category. 
 
In terms of workflow, we used GitHub for version control, but as the scope of the project was limited in both scope and time, we mainly coded in tandem over Zoom and would discuss strategies often. 
 
The main difficulty getting to our MVP was the use of useParams, and then the accessing of the questions from the API. Once we reached our MVP, we concentrated on styling using vanilla CSS to give the site a more unique feel. Due to the limitations of the API, we had to come up with a way to make sure the questions all had unique IDs, allowing for us to reach our stretch goal, the ability to curate a list of chosen questions as well as a randomly generated one. This was achieved by using uuid. Once we met these goals, we decided to refine the random category component by adding further options of amounts.
```javascript
 const getData = async (numQs) => {
   const resp = await randomQuiz(numQs);
   console.log('resp', resp.data);
   setRandomQuestions(resp.data);
 };
```
```javascript
 function handleButton(e) {
   e.preventDefault();
   const allButtons = e.target.parentElement.childNodes;
   allButtons.forEach((btn) => btn.classList.remove('selected'));
   e.target.classList.add('selected');
   setStatus('Generating...');
   getData(e.target.value);
 }
```
 We also added a counter to the My Quiz section on the Navbar, allowing for a clear indicator of how big the quiz is.
 
### Wireframes:
 
<img src="./src/assets/joe-excalidraw.jpeg" />
<img src="./src/assets/emily-excalidraw.jpeg" />
 
## Major Hurdles
 
The biggest hurdle was understanding the relationship between localStorage and state, and more specifically making sure that changes in one reflected in changes in the other, as well as making sure that these changes were apparent to the user through CSS.
 
## Wins
 
A win was getting the random quiz generator working. Since we needed a different number of questions to popup depending on the button pressed, I used a handlebutton function that would pass the value of the button through to the api call and return that number of questions back to the user.
 
 
## Bugs
 
No known bugs.  
 
## Key Learnings
 
This project allowed me to learn about API calls and encouraged me to be creative in working with a public one that has limitations. It also reinforced key ideas about state and using local storage to save information within a multi page app. I also learned about styling, and how important it is to have interactive elements that demonstrate to the user their use. We mainly accomplished this by using hovers on buttons and icons that are clickable. 
 
### Contact Me
Email: JDeering94@gmail.com

[LinkedIn](https://www.linkedin.com/in/joe-deering/)

[Portfolio](https://joedeering.co.uk/)

Feel free to share feedback or if you are aware of any job opportunities please let me know.
