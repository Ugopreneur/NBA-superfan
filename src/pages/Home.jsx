import { useState } from "react";
import Hero from "../assets/images/Hero.jpg";
import SearchBar from "../components/SearchBar";
import TeamResult from "./TeamResult";
import teams from "../teams.json";
import TeamsCards from "../components/TeamsCards";


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
            <button type="button" onClick={handleClick}>
              Go Back
            </button>
          </div>
          <div>
            <TeamResult details={teamDetails.response[0]} />
          </div>
         
        </div>
      ) : (
        <div>
          {/* apply inline styles to the img element */}
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
          {teams.map((team) => {
            return (
              <div key={team.id} class="col-md-4 d-flex justify-content-center mb-5">
                <TeamsCards
                  name={team.name}
                  image={team.image}
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
