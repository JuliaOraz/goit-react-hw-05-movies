import axios from 'axios';
import defaultImg from '../img/no_image.jpg';

const API_KEY = '2994e3a31c3cad99fd99bf3fe61d916f';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getPoster = img => {
  if (img === null) {
    return defaultImg;
  }
  return `https://image.tmdb.org/t/p/w500${img}`;
};

export const getTrendingMovies = async (page = 1) => {
  const { data } = await axios.get(`/trending/movie/week?page=${page}`);
  return data;
};

export const getSearchMovies = async (query, page = 1) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&page=${page}&include_adult=false`
  );
  return data;
};

export const getMovieId = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}`);
  return data;
};

export const getCast = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);

  return data;
};
export const getReviews = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews?page=1`);
  return data;
};
