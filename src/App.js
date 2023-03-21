import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { NBAcontext } from './context/context';
import AllStars from './pages/AllStars';

function App() {
  return (
    <NBAcontext.Provider>
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
    </NBAcontext.Provider>
  );
}

export default App;
