import React,{useContext} from 'react'
import { NBAcontext } from '../context/context'

const TeamResult = () => {
    const result = useContext(NBAcontext)
    console.log(result)
  return (
    <div>
      hello from TeamResult
    </div>
  )
}

export default TeamResult
