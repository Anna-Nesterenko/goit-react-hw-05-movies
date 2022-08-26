import { Link, useLocation } from 'react-router-dom';
import { TiArrowLeftOutline } from 'react-icons/ti';
import styled from 'styled-components';

export const ButtonBackTo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <WrapperBtnBack>
      <LinkStyled to={backLinkHref}>
        <TiArrowLeftOutline /> Back to the Previous page
      </LinkStyled>
    </WrapperBtnBack>
  );
};

const WrapperBtnBack = styled.div`
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

const LinkStyled = styled(Link)`
  border-bottom: 4px double black;
  &:hover {
    background-color: #66d0d0;
    border-bottom: 4px double white;
  }
`;
