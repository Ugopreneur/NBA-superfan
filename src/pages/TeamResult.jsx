import React from 'react'

const TeamResult = (props) => {
  return ( 
     <div className="container">
      
      {/* display the team's name and city in an 'h2' element */}
      <h2 style={{ display:"flex", justifyContent:"center" }}>
        {props.details.name} 
      </h2>
      <div style={{display:"flex", justifyContent:"center"}}>
        <img src={props.details.logo} alt={`${props.details.name} logo`} style={{ width: '200px' }} />
        </div>
        <h3 style={{ display:"flex", justifyContent:"center" }}>
        {props.details.nickname} 
      </h3>
   </div>
  )
}

export default TeamResult
