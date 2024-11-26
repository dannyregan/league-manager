import { useEffect, useState } from "react"

import { fetchTeam } from "../server/api-client";

const TeamInfo = ({ id }) => {
    const [team, setTeam] = useState({});

    useEffect(() => {
        fetchTeam(id).then((team) => {
            setTeam(team)
        })
    })
    return (
        <>
            {team.rank}
        </>
    )
};

export default TeamInfo;