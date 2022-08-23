import { SearchForm } from 'components';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getSearchMovies } from 'services/services';
import { Loader } from 'components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  useEffect(() => {
    if (searchQuery) {
      const fetchByQuery = async () => {
        setLoading(true);
        try {
          const data = await getSearchMovies(searchQuery);
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
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchName = e.target.elements.searchQuery.value;
    //  console.log('searchQuery :>> ', searchQuery);
    setSearchParams({
      searchQuery: searchName,
    });
    //  console.log('.value :>> ', searchName);
    if (searchName === '') {
      toast.warning('Sorry, your field is empty. Enter search name');
      return;
    }
  };

  return (
    <>
      <SearchForm onSubmitForm={handleSubmit} />
      {loading && <Loader />}
      <ul>
        {movies.map(el => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
