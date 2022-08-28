import noUserImg from '../../images/no-user.jpg';
import { CastEl, CastImg, CastTitle, CastListStyled } from './CastList.styled';
import PropTypes from 'prop-types';

export const CastList = ({ casts }) => {
  //   console.log('casts', casts);
  return (
    <CastListStyled>
      {casts.map(({ id, profile_path, name }) => (
        <CastEl key={id}>
          {profile_path ? (
            <CastImg
              src={`https://image.tmdb.org/t/p/w185${profile_path}`}
              alt={name}
            />
          ) : (
            <CastImg src={noUserImg} alt={name} />
          )}
          <CastTitle>{name}</CastTitle>
        </CastEl>
      ))}
    </CastListStyled>
  );
};

CastList.propType = {
  casts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
