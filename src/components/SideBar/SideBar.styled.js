import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperHeader = styled.header`
  width: 100vw;
  height: 70px;
  background: linear-gradient(to top right, #00b2b2, #004747);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  padding: 10px;
  border-bottom: 6px double white;
  box-shadow: 0 0 10px #66d0d0, 0 0 40px #66d0d0, 0 0 60px #66d0d0,
    0 0 80px #66d0d0;
`;

export const NavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  color: black;
  border-bottom: 4px double black;

  &:hover {
    color: #66d0d0;
    border-bottom: 4px double #66d0d0;
  }

  &.active {
    color: white;
    border-bottom: 4px double white;

    &:hover {
      color: #66d0d0;
      border-bottom: 4px double #66d0d0;
    }
  }
`;
