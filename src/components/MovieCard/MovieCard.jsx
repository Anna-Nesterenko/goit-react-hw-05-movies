import noPosterImg from '../../images/imageComingSoon.jpg';
import {
  WrapperInfoStyled,
  ImgStyled,
  WrapperTextInfo,
  SingleTitle,
  SingleText,
  GenresText,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
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
