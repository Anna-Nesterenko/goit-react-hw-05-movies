import axios from 'axios';

const API_KEY = '833791a5e754a1f0443be5fc62646bdb';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const getSearchMovies = async searchQuery => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false`
  );
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return data;
};
