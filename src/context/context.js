//creating a new context and initialising it as null
import { createContext, useState } from "react";

export const NBAcontext = createContext(null);

export const NBAteams = "testingOnly";

const contextRandom = () => {
    const [teamResults, setTeamResults] = useState(NBAteams);
}