import React from "react";
import Hero from "../assets/images/Hero.jpg";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    // return the jsx for the home page
    <div className="container">
      {/* apply inline styles to tye img element */ }
      <img
        src={Hero}
        style={{ width: "100%", height: "100vh", objectFit: "cover", opacity: "0.85"}}
        alt="logo"
      />
      <div
        style={{
          position: "absolute",
          top: "84%",
          left: "0",
          right: "0",
          transform: "translateY(-50%)",
        }}
      >
        {/* insert the search bar component */} 
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
