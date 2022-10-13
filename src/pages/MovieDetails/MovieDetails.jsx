import { useLocation, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieId, getPoster } from '../../components/API';
import { Loader } from '../../components/Loader/Loader';
import {
  BackLink,
  MovieBox,
  MoviePoster,
  MovieTitle,
  MovieScore,
  MovieSubtitle,
  MovieText,
  MovieList,
  MovieItem,
  AdditionalLink,
  AdditionalBox,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    try {
      getMovieId(movieId).then(data => setMovie(data));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (movie === null) {
    return;
  }

  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;
  const img = getPoster(poster_path);
  const releaseDate = new Date(release_date).getFullYear();

  return (
    <main className="container">
      <BackLink to={backLinkHref}>&larr; Back to</BackLink>
      <MovieBox>
        <MoviePoster src={img} alt="title" />
        <div>
          <MovieTitle>
            {title} ({releaseDate})
          </MovieTitle>
          <MovieScore>User score: {Math.round(vote_average * 10)}%</MovieScore>
          {overview && (
            <>
              <MovieSubtitle>Overview</MovieSubtitle>
              <MovieText>{overview}</MovieText>
            </>
          )}
          {genres && (
            <>
              <MovieSubtitle>Genres</MovieSubtitle>
              <MovieList>
                {genres.map(({ id, name }) => {
                  return <MovieItem key={id}>{name}</MovieItem>;
                })}
              </MovieList>
            </>
          )}
        </div>
      </MovieBox>
      <AdditionalBox>
        <MovieSubtitle>Additional information</MovieSubtitle>
        <AdditionalLink to="cast" state={{ from: backLinkHref }}>
          Cast
        </AdditionalLink>
        <AdditionalLink to="reviews" state={{ from: backLinkHref }}>
          Reviews
        </AdditionalLink>
      </AdditionalBox>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
