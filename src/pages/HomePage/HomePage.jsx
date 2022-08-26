import { Loader } from 'components';
import { useFetchMovies } from 'hooks';

import {
  WrapperMain,
  HomeTitle,
  List,
  ListEl,
  LinkStyled,
} from './HomePage.styled';

export const HomePage = () => {
  const { movies, loading } = useFetchMovies();

  return (
    <WrapperMain>
      <HomeTitle>Tranding today</HomeTitle>
      <List>
        {loading && <Loader />}
        {movies.map(({ id, title }) => (
          <ListEl key={id}>
            <LinkStyled to={`/movies/${id}`}>{title}</LinkStyled>
          </ListEl>
        ))}
      </List>
    </WrapperMain>
  );
};
