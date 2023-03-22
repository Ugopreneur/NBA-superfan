// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// // define the AllStarts component
// const AllStars = () => {
//   // declare the variable and its setPlayers with an empty array
//   const [nbaPlayers, setPlayers] = useState();

//   // useEffect hook to get the data from the API 
//   useEffect(() => {
//     const fetchPlayers = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://api-nba-v1.p.rapidapi.com/players',
//         params: { team: '1', season: '2021' },
//         headers: {
//           'X-RapidAPI-Key': 'ba35c23694msha32dc39d4972b3fp1dd4e7jsn8e927d8cbb58',
//           'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
//         },
//       };

//       try {
//         const response = await axios.request(options);
//         console.log('Players API response:', response.data);
//         setPlayers(response.data.response);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     // call the function to get the data
//     fetchPlayers();
//   }, []);

//   // return the jsx for the AllStars component
//   return (
//     <div>
//       <h1>Player List</h1>
//       {/*insert the Allstars component and pass the nbaplayers as a prop */}
//       {/* <AllStars players={nbaPlayers} /> */}
//     </div>
//   );
// };

// export default AllStars;
