import { NavLink, Outlet } from 'react-router-dom';

export const SideBar = () => {
  return (
    <>
      <div>
        <nav>
          <NavLink to="/home">home</NavLink>
          <NavLink to="/movies">moves</NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
};
