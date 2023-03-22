import React from 'react';
import teams from "../teams.json";



// define the teams component that accepts a team prop
const Teams = ({ team }) => {
  return (
    // return the team component
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
  );
};

export default Teams;
