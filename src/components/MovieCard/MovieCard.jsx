import noPosterImg from '../../images/imageComingSoon.jpg';
import PropTypes from 'prop-types';
import {
  WrapperInfoStyled,
  ImgStyled,
  WrapperTextInfo,
  SingleTitle,
  SingleText,
  GenresText,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  //   console.log('movie :>> ', movie);
  const precent = Math.ceil(movie.vote_average * 10);
  const { poster_path, title, overview, genres } = movie;

  return (
    <WrapperInfoStyled>
      {poster_path ? (
        <ImgStyled
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      ) : (
        <ImgStyled src={noPosterImg} alt={title} />
      )}
      <WrapperTextInfo>
        <SingleTitle>Movie title: {title}</SingleTitle>
        <SingleText>User rating: {precent} % </SingleText>
        <SingleTitle>Overview:</SingleTitle>
        <p>{overview}</p>
        <SingleTitle>
          Genres:
          {genres &&
            genres.map(({ id, name }) => (
              <GenresText key={id}>{name} |</GenresText>
            ))}
        </SingleTitle>
      </WrapperTextInfo>
    </WrapperInfoStyled>
  );
};

MovieCard.propType = {
  movie: PropTypes.arrayOf(
    PropTypes.exact({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    })
  ).isRequired,
};
