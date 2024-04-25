import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Spinner from './components/Spinner/Spinner';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import MainLayout from './layouts/MainLayout';

const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Main />} />
            <Route
              path="favorites"
              element={
                <Suspense fallback={<Spinner />}>
                  <Favorites />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
