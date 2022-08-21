import { Loader } from 'components';
import { useFetchMovies } from 'hooks';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { movies, loading } = useFetchMovies();

  return (
    <main>
      {loading && <Loader />}
      <ul>
        {movies.map(el => (
          <li key={el.id}>
            <Link to={`/home/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
