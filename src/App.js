import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllStars from "./pages/AllStars";
import Teams from "./pages/Teams";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-stars" element={<AllStars />} />
          {/* display our player infos/stats in the allstars page */}
          <Route path="/all-stars/:playerName" element={<AllStars />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
