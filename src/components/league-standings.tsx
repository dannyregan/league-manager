import { useState } from "react"

import Header from "./header"
import TeamTable from "./team-table"
import ScorersTable from "./scorers-table"

const LeagueStandings = ({ initialData, onTeamClick }) => {
    return (
        <>
            <Header message="League Standings"/>
            <TeamTable teamsData={ initialData } onTeamClick={onTeamClick} />
            <Header message="Top Scorers" />
            <ScorersTable teamsData={initialData} onTeamClick={onTeamClick} />
        </>
    );
};

export default LeagueStandings;