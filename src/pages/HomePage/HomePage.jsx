import { getTrendingMovies } from '../../services/API';
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { Title } from './HomePage.styled';

export default function HomePage() {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    try {
      getTrendingMovies().then(({ results }) => setPopularMovie(results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main className="container">
      <Title>Trending today</Title>
      <MovieList movies={popularMovie} />
    </main>
  );
}
