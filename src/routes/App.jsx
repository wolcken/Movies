import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='*' element={<NotFound />} />
          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
