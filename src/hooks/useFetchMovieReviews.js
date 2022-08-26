import { useState, useEffect } from 'react';
import { getMovieByReviews } from 'services/services';
import { useParams } from 'react-router-dom';

export const useFetchMovieReviews = () => {
	
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieByReviews = async () => {
      setLoading(true);
      try {
        const data = await getMovieByReviews(movieId);

        setReviews(data.results);
      } catch (error) {
        setError(error);
        //   toast.error(`Not Found`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieByReviews();
  }, [movieId]);

  return { reviews, loading, error };
};
