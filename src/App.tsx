import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import { Suspense } from 'react';
import Favorites from './components/Favorites/Favorites';
import Spinner from './components/Spinner/Spinner';

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="favorites"
            element={
              <Suspense fallback={<Spinner />}>
                <Favorites />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
