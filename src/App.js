import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Exercises from "./pages/exercises.jsx";
// import Navbar from '../components/navbar';
// import Header from '../components/header';
// import Footer from '../components/Footer';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Exercises" element={<Exercises />} />
        </Routes>
    </Router>
  );
}

export default App;
