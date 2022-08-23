import { Loader } from 'components';
import { useFetchMovies } from 'hooks';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { movies, loading, error } = useFetchMovies();

  return (
    <main>
      {loading && <Loader />}

      {!error && (
        <ul>
          {movies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
