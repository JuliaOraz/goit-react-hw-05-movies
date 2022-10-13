import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getPoster } from '../API';
import {
  MovieContainer,
  MovieItem,
  MovieLink,
  MovieImg,
  MovieTitle,
} from './MovieList.styled';

export default function MovieList({ movies }) {
  const location = useLocation();

  const movieItem = movies.map(({ id, poster_path, title }) => {
    const img = getPoster(poster_path);

    return (
      <MovieItem key={id}>
        <MovieLink to={`/movies/${id}`} state={{ from: location }}>
          <MovieImg src={img} alt={title} />
          <MovieTitle>{title}</MovieTitle>
        </MovieLink>
      </MovieItem>
    );
  });

  return <MovieContainer>{movieItem}</MovieContainer>;
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
