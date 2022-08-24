import { SearchForm } from 'components';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getSearchMovies } from 'services/services';
import { Loader } from 'components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query) {
      const fetchByQuery = async () => {
        setLoading(true);
        try {
          const data = await getSearchMovies(query);
          //  console.log('data', data);
          setMovies(data.results);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      fetchByQuery();
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchName = e.target.elements.query.value;
    //  console.log('searchQuery :>> ', searchQuery);
    setSearchParams({
      query: searchName,
    });
    //  console.log('.value :>> ', searchName);
    if (searchName === '') {
      toast.warning('Sorry, your field is empty. Enter search name');
      return;
    }
  };

  return (
    <>
      <SearchForm onSubmitForm={handleSubmit} autoComplete="off" />

      {loading && <Loader />}

      {movies.length !== 0 ? (
        <ul>
          <h3>Search results:</h3>
          {movies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`} state={{ from: location }}>
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No information</p>
      )}
    </>
  );
};
