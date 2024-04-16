import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import Main from './components/Main/Main';

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
