import { useEffect, useState } from "react"

import { fetchTeam } from "../server/api-client";
import Header from "./header";
import TeamTable from "./team-table";
import PlayersTable from "./players-table";

const TeamInfo = ({ id, onTeamClick } ) => {
    const [team, setTeam] = useState(null);

    useEffect(() => {
        fetchTeam(id).then((teamData) => {
            console.log("fetched team data:", teamData)
            setTeam(teamData)
        })
    }, [id])
    
    if (!team) {
        return <p>Loading team data...</p>
    }

    return (
        <>
            <Header message={team.teamName} />
            <TeamTable teamsData={team} onTeamClick={onTeamClick} />
            <Header message="Roster" />
            <PlayersTable playersData={team.players} onTeamClick={onTeamClick} />
        </>
    )
};

export default TeamInfo;