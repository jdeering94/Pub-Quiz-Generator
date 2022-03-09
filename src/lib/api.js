import axios from 'axios';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const cocktailAPI = () => {
  return axios.get(baseURL);
};
