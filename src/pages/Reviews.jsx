import { useState, useEffect } from 'react';
import { getMovieByReviews } from 'services/services';
import { useParams } from 'react-router-dom';
import { Loader } from 'components';
import { ReviewsList } from 'components';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieByReviews = async () => {
      setLoading(true);
      try {
        const data = await getMovieByReviews(movieId);
        console.log('data', data);
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

  return (
    <main>
      {!error && (
        <section>
          {loading && <Loader />}
          {reviews.length !== 0 ? (
            <ReviewsList reviews={reviews} />
          ) : (
            <p>No information</p>
          )}
        </section>
      )}
    </main>
  );
};
