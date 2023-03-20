import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
