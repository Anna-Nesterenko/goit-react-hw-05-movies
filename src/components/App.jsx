import { Routes, Route } from 'react-router-dom';
import { SideBar } from 'components';
import { Home } from 'pages';
import { GlobalStyles } from './GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route path="home" element={<Home />} />
          <Route path="home/:movieId" element={<div>Single id page</div>} />
          <Route path="movies" element={<div>movies</div>} />
        </Route>
      </Routes>
    </>
  );
};
