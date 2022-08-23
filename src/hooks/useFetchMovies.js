import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/services';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};
