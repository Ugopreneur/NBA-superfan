import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import AllStars from './pages/AllStars';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/all-stars" element={<AllStars />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
