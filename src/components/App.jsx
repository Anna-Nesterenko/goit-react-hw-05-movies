import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SideBar } from 'components';
import { GlobalStyles } from './GlobalStyles';
import { ToastContainer } from 'react-toastify';
import { NotFoundPage } from 'pages';

const loaderLazy = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const HomePage = loaderLazy('HomePage');
const MoviesPage = loaderLazy('MoviesPage');
const MoviesSinglePage = loaderLazy('MoviesSinglePage');
const CastPage = loaderLazy('CastPage');
const ReviewsPage = loaderLazy('ReviewsPage');

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback="Wait a little bit...">
        <Routes>
          <Route path="/" element={<SideBar />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MoviesSinglePage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
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
