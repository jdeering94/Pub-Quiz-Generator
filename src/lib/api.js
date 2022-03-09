import axios from 'axios';

const baseURL = 'https://api.api-ninjas.com/v1/trivia?category';

// artliterature;
// language;
// sciencenature;
// general;
// fooddrink;
// peopleplaces;
// geography;
// historyholidays;
// entertainment;
// toysgames;
// music;
// mathematics;
// religionmythology;
// sportsleisure;

export const triviaAPI = () => {
  return axios({
    method: 'get',
    url: `${baseURL}=music`,
    headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY }
  });
};
