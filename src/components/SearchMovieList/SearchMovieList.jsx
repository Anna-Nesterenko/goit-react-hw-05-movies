import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  List,
  MovieSearchTitle,
  ListEl,
  LinkStyled,
} from './SearchMovieList.styled';

export const SearchMovieList = ({ movies }) => {
//   console.log('movies', movies);
  const location = useLocation();
  return (
    <List>
      <MovieSearchTitle>Search results:</MovieSearchTitle>
      {movies.map(({ id, title }) => (
        <ListEl key={id}>
          <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </LinkStyled>
        </ListEl>
      ))}
    </List>
  );
};

SearchMovieList.propType = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
