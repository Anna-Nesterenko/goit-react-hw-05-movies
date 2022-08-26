import { Outlet } from 'react-router-dom';
import { WrapperHeader, NavStyled } from './SideBar.styled';

export const SideBar = () => {
  return (
    <>
      <WrapperHeader>
        <NavStyled to="/">Нome</NavStyled>
        <NavStyled to="/movies">Moves</NavStyled>
      </WrapperHeader>
      <Outlet />
    </>
  );
};
