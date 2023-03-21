import React from 'react';


// define the teams component that accepts a team prop
const Teams = ({ team }) => {
  return (
    // return the team component
    <div>
      {team && (
        <div>
          {/* display the team's name and city in an 'h2' element */}
          <h2>
            {team.name} - {team.city}
          </h2>
          <img src={team.logo} alt={`${team.name} logo`} style={{ width: '100px' }} />
        </div>
      )}
    </div>
  );
};

export default Teams;
