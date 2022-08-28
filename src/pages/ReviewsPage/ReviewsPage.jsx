import { Loader } from 'components';
import { ReviewsList } from 'components';
import { useFetchMovieReviews } from 'hooks';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const ReviewsPage = () => {
  const { reviews, loading, error } = useFetchMovieReviews();

  return (
    <>
      {!error && (
        <WrapperPage>
          {loading && <Loader />}
          {reviews.length !== 0 ? (
            <ReviewsList reviews={reviews} />
          ) : (
            <p>No information</p>
          )}
        </WrapperPage>
      )}
    </>
  );
};

const WrapperPage = styled.div`
  border-top: 6px double #004747;
  padding: 15px;
`;

ReviewsPage.propType = {
  reviews: PropTypes.array.isRequired,
};
