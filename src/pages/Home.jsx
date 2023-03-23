import { useState } from "react";
import Hero from "../assets/images/Hero.jpg";
import SearchBar from "../components/SearchBar";
import TeamResult from "./TeamResult";
import teams from "../teams.json";
import TeamsCards from "../components/TeamsCards";
import TeamHighlights from "../components/TeamHighlights";


const Home = () => {
  const [teamDetails, setTeamDetails] = useState();
  console.log(`Yes we have got some`, teamDetails);

  const handleClick = () => {
    setTeamDetails("")
  };

  return (
    <div className="container">
      {/* this is a ternanry function for the homepage that displays the hero and search bar by default
      but displays the team results when the search bar is clicked */}
      {teamDetails ? (
        <div>
           <div>
            <button type="button" style={{width:"100px", backgroundColor:"black", fontSize:"20px", color:"white"}}  onClick={handleClick}>
              Go Back
            </button>
          </div>
          <div>
            <TeamResult details={teamDetails.response[0]} />
            <TeamHighlights details={teamDetails.response[0]} />
          </div>
         
        </div>
      ) : (
        <div>
          {/* apply inline styles to the img element */}
          <h2><center>Quickly discover more about your favourite teams!</center></h2>
          <img
            src={Hero}
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              opacity: "0.85",
            }}
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
            <SearchBar setResult={setTeamDetails} />
          </div>
          <div class="row">
            <hr></hr>
            <h2><center>Pick from popular teams</center></h2>
          {teams.map((team) => {
            return (
              <div key={team.id} class="col-md-4 d-flex justify-content-center mb-5">
                <TeamsCards
                name={team.name}
                  image={team.image}
                  setResult={setTeamDetails}
                />
              </div>
            );
          })}
        </div>
        </div>
      )}
    </div>
  );
};

export default Home;
