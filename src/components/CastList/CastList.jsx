import noUserImg from '../../images/no-user.jpg';

export const CastList = ({ casts }) => {
  //   console.log('casts', casts);
  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          {cast.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
              alt={cast.name}
            />
          ) : (
            <img src={noUserImg} alt={cast.name} />
          )}
          <p>{cast.name}</p>
          <p>{cast.caracter}</p>
        </li>
      ))}
    </ul>
  );
};
