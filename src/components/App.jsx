import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SideBar } from 'components';
import { GlobalStyles } from './GlobalStyles';
import { ToastContainer } from 'react-toastify';

const loaderLazy = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const Home = loaderLazy('Home');
const Movies = loaderLazy('Movies');
const MoviesDetailsPage = loaderLazy('MoviesDetailsPage');
const Cast = loaderLazy('Cast');
const Reviews = loaderLazy('Reviews');

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback="Wait a little bit...">
        <Routes>
          <Route path="/" element={<SideBar />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} /> 
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer
        style={{ top: '5em' }}
        position="top-center"
        autoClose={2000}
        theme="colored"
      />
    </>
  );
};
