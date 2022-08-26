import { SearchForm } from 'components';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/services';
import { SearchMovieList } from 'components';
import { Loader } from 'components';
import { WrapperMoviePage, TextNotInfo } from './MoviePage.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      const fetchByQuery = async () => {
        setLoading(true);
        try {
          const data = await getSearchMovies(query);
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

    setSearchParams(searchName !== '' ? { query: searchName } : {});

    if (searchName === '') {
      toast.warning('Sorry, your field is empty. Enter search name');
      return;
    }
  };

  return (
    <WrapperMoviePage>
      <SearchForm onSubmitForm={handleSubmit} autoComplete="off" />

      {loading && <Loader />}

      {movies.length !== 0 ? (
        <SearchMovieList movies={movies} />
      ) : (
        <TextNotInfo>Your search list is currently empty.</TextNotInfo>
      )}
    </WrapperMoviePage>
  );
};


