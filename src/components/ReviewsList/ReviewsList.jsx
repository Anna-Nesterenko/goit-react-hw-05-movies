export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h4>Reviewed by the author "{author}" : </h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
