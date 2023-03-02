import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import NotFound from '../pages/NotFound';
import ByGenre from '../pages/ByGenre';
import { SearchProvider } from '../contexts/SearchProvider';

function App() {

  return (
    <SearchProvider>
      <BrowserRouter>
        <Layout>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/series' element={<Series />} />
            <Route path='/byGenre' element={<ByGenre />} />
            <Route path='*' element={<NotFound />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
