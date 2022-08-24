import noPosterImg from '../../images/imageComingSoon.jpg';
export const MovieCard = ({ movie }) => {
  //   console.log('movie :>> ', movie);
  const precent = Math.ceil(movie.vote_average * 10);
  return (
    <>
      <section>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <img src={noPosterImg} alt={movie.title} />
        )}
        <div>
          <h2>{movie.title}</h2>
          <p>User score: {precent} % </p>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h3>
            Genres:
            {movie.genres &&
              movie.genres.map(({ id, name }) => <span key={id}>{name}</span>)}
          </h3>
        </div>
      </section>
    </>
  );
};
