import { useState, useEffect } from 'react';
import { getMovieDetailsById } from 'services/services';
import { useParams } from 'react-router-dom';

export const useFetchMoviesById = () => {
  const { movieId } = useParams();

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesById = async () => {
      setLoading(true);
      try {
        const data = await getMovieDetailsById(movieId);

        setMovies(data);
      } catch (error) {
        setError(error);
        //   toast.error(`Not Found`);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesById();
  }, [movieId]);
  return { movies, loading, error, movieId };
};
