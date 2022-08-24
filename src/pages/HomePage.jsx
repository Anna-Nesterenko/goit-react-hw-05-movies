import { Loader } from 'components';
import { useFetchMovies } from 'hooks';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const { movies, loading, error } = useFetchMovies();
  //   const location = useLocation();

  return (
    <main>
      <h3>Tranding today</h3>
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
