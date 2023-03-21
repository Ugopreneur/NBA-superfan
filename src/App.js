import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { NBAcontextContainer } from './context/context';
import AllStars from './pages/AllStars';
import TeamResult from './pages/TeamResult';
import AllStarsResult from './pages/AllStarsResult';



function App() {
  const {teamResults, setTeamResults, NBAcontext, result} = NBAcontextContainer();
  return (
  <NBAcontext.Provider value={{teamResults,setTeamResults}}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/all-stars" element={<AllStars />} />
          <Route path="/all-stars-result" element={<AllStarsResult />} />
          <Route path="/team-result" element={<TeamResult />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </NBAcontext.Provider>
  );
}

export default App;
