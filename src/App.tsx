import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
