import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllSttars = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/players',
        params: { team: '1', season: '2021' },
        headers: {
          'X-RapidAPI-Key': 'API-Key',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log('Players API response:', response.data);
        setPlayers(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>Player List</h1>
      {/* <AllSttars players={players} /> */}
    </div>
  );
};

export default AllSttars;
