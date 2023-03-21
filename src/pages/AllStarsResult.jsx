import React from 'react'
import { NBAcontextContainer } from '../context/context';


const AllStarsResult = () => {
  const {teamResults, setTeamResults, NBAcontext, result} = NBAcontextContainer();
console.log(result.teamResults);
  return (
    <div>
      hello from AllStarsResult
    </div>
  )
}

export default AllStarsResult
