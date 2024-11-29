import { useState, useEffect } from "react"
import { fetchTeams } from "../server/api-client"

import Header from "./header"
import TeamTable from "./team-table"
import ScorersTable from "./scorers-table"

const LeagueStandings = ({ initialData, onTeamClick }) => {
    const [teams, setTeams] = useState(initialData)

    useEffect(() => {
        debugger;
        fetchTeams().then((teams) => {
            setTeams(teams);
        });
    }, [])

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