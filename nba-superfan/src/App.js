import { BrowserRouter as Router} from'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


import React from 'react'

const App = () => {
  return (
    <div>
      <Router>
          <Navbar />

          {/* <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/allstars" element={<AllStars />} />
          </Routes> */}
        <Footer />
      </Router>
    </div>
  )
}

export default App


