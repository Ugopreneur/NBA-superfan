import React from 'react';

const Teams = ({ team }) => {
  return (
    <div>
      {team && (
        <div>
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
