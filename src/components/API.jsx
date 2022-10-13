import axios from 'axios';
import defaultImg from '../img/no_image.jpg';

const API_KEY = '2994e3a31c3cad99fd99bf3fe61d916f';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const getPoster = img => {
  if (img === null) {
    return defaultImg;
  }
  return `https://image.tmdb.org/t/p/w500${img}`;
};

export const getTrendingMovies = async (page = 1) => {
  const { data } = await axios.get(
    `/trending/movie/week?api_key=${API_KEY}&page=${page}`
  );
  return data;
};

export const getSearchMovies = async (query, page = 1) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  return data;
};

export const getMovieId = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getCast = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};
export const getReviews = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};
