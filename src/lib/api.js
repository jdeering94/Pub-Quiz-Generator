import axios from 'axios';

const baseURL = 'https://api.api-ninjas.com/v1/trivia?category';

// ✅: quality amazing ❔ quality not amazing:
// artliterature;
// language ❌;
// sciencenature;
// general;
// fooddrink;
// peopleplaces;
// geography ✅;
// historyholidays ❔;
// entertainment;
// toysgames;
// music;
// mathematics;
// religionmythology ✅;
// sportsleisure ❔;

export const triviaAPI = (category) => {
  return axios({
    method: 'get',
    url: `${baseURL}=${category}&limit=30`,
    headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY }
  });
};
