import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [playerData, setPlayerData] = useState(null);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const fetchPlayerData = async (playerName) => {
    try {
      const response = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerName}`);
      const player = response.data.data[0];

      if (player) {
        const { id, team, position, height_feet, height_inches, weight_pounds, college } = player;
        const teamResponse = await axios.get(`https://www.balldontlie.io/api/v1/teams/${team.id}`);
        const teamData = teamResponse.data;

        const gamesResponse = await axios.get(`https://www.balldontlie.io/api/v1/games?player_ids[]=${id}`);
        const gamesData = gamesResponse.data.data;

        const statsResponse = await axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${id}`);
        const statsData = statsResponse.data.data[0];

        setPlayerData({
          player: {
            id,
            first_name: player.first_name,
            last_name: player.last_name,
            position,
            height: `${height_feet} ft ${height_inches} in`,
            weight: `${weight_pounds} lbs`,
            college,
          },
          team: teamData,
          games: gamesData,
          stats: statsData,
        });
      } else {
        
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setPlayerData(null);
    }
  };

  const handleSearch = () => {
    fetchPlayerData(searchInput);
  };

  return (
    <div className="container">
      <h1 className="title">Search for an NBA player</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter player name"
          value={searchInput}
          onChange={handleChange}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {playerData ? (
        <div className="card">
          <h2>Player: {playerData.player.first_name} {playerData.player.last_name}</h2>
          <p>Height: {playerData.player.height}</p>
          <p>Weight: {playerData.player.weight}</p>
          <p>Position: {playerData.player.position}</p>
          <p>College: {playerData.player.college}</p>
          {playerData.team && (
            <div>
              <h2>Team: {playerData.team.full_name}</h2>
              <ul>
                <li><strong>Abbreviation:</strong> {playerData.team.abbreviation}</li>
                <li><strong>City:</strong> {playerData.team.city}</li>
                <li><strong>Conference:</strong> {playerData.team.conference}</li>
                <li><strong>Division:</strong> {playerData.team.division}</li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p className="no-data-message">Please search for an NBA player</p>)}
</div>
  
)};

export default Home
