import * as React from 'react'
import { createContext, useState, useContext } from "react";

//creating a new context and initialising it as null
const NBAcontext = createContext(null);

const NBAteams = "testingOnly";

export const NBAcontextContainer = () => {
    const [teamResults, setTeamResults] = useState(NBAteams);
    const result = useContext(NBAcontext)

    return {teamResults, setTeamResults, NBAcontext, result}
}