import { Link, Outlet, useLocation } from 'react-router-dom';
import { MovieCard } from 'components';
import { Loader } from 'components';
import { useFetchMoviesById } from 'hooks';
import { ButtonBackTo } from 'components';
import { NotFoundPage } from './NotFoundPage';

export const MoviesSinglePage = () => {
  const { movies, error, loading, movieId } = useFetchMoviesById();
  const location = useLocation();
  //   console.log('location :>> ', location);
  return (
    <main>
      <section>
        {loading && <Loader />}
        <ButtonBackTo />
        {!error && movies && <MovieCard movie={movies} />}
      </section>
      <section>
        {!error ? (
          <ul>
            Additional Information
            <li>
              <Link
                to={`/movies/${movieId}/cast`}
                state={{ from: location?.state?.from }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={`/movies/${movieId}/reviews`}
                state={{ from: location?.state?.from }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        ) : (
          <NotFoundPage />
        )}
      </section>
      <Outlet />
    </main>
  );
};
