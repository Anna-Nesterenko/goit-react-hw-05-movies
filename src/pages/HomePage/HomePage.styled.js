import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperMain = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 20px;
`;
export const HomeTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  max-width: 500px;
  padding: 15px;
  border-left: 4px double white;
  border-right: 4px double white;
  background: linear-gradient(to top right, #ccefef, #008e8e);
  margin: 0 auto;
  text-align: start;
  box-shadow: 0 0 10px #66d0d0, 0 0 40px #66d0d0, 0 0 60px #66d0d0,
    0 0 80px #66d0d0;
`;

export const ListEl = styled.li`
  font-size: 18px;
  padding-left: 10px;
  padding-bottom: 2px;
  padding-top: 2px;
  color: black;
  &:hover {
    color: white;
  }
`;
export const LinkStyled = styled(Link)`
  padding-right: 60px;
`;
