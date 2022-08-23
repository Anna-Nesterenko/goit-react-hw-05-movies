import { Link, Outlet } from 'react-router-dom';
import { MovieCard } from 'components';
import { Loader } from 'components';
import { TiArrowLeftOutline } from 'react-icons/ti';
import { useFetchMoviesById } from 'hooks';

export const MoviesDetailsPage = () => {
  const { movies, error, loading, movieId } = useFetchMoviesById();

  //   console.log('movieId :>> ', movieId);
  return (
    <main>
      <section>
        {loading && <Loader />}
        <Link to="/">
          <TiArrowLeftOutline /> Back to the Previous page
        </Link>
        {!error && movies && <MovieCard movie={movies} />}
      </section>
      <section>
        <ul>
          Additional Information
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </main>
  );
};
