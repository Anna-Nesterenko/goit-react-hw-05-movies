import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  font-size: 16px;
  font-weight: 700;
  padding-top: 15px;
  margin: 0 auto;
  text-align: center;
`;

export const ListEl = styled.li`
  text-align: center;
  margin-top: 10px;
  margin-right: 30px;
  font-size: 16px;
  font-weight: 700;
  color: black;
  &:last-child {
    margin-right: 0;
  }
`;

export const NavStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
  border-bottom: 3px double black;
  padding-left: 5px;
  padding-right: 5px;
  &:hover {
    color: #66d0d0;
    border-bottom: 3px double #66d0d0;
  }

  &.active {
    color: white;
    border-bottom: 3px double white;
    background-color: #004747;

    &:hover {
      color: #66d0d0;
      border-bottom: 3px double #66d0d0;
    }
  }
`;
