export const ReviewsList = ({ reviews }) => {
  //   console.log('reviews', reviews);
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h4>Reviewed by the author "{review.author}" : </h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
