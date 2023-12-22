import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Sponsors from './pages/Sponsors';
import Layout from './pages/Layout';
import Location from './pages/Location';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="sponsors" element={ <Sponsors /> } />
        <Route path="location" element={ <Location /> } />
      </Route>
      <Route path="/checkout/:currency" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
