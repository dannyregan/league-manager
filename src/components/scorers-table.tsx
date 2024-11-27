import Table from './table';

const ScorersTable = ({ teamsData, onTeamClick }) => {
    const headers = ["Rank", "Team", "Name", "Goals"];

    const playerRows = teamsData.teams.flatMap((team) =>
        team.players.map((player) => ({
            rank: player.rank,
            teamName: team.teamName,
            playerName: player.playerName,
            goals: player.goals,
        }))
    );

    const renderRow = (player, handleClick) => (
        <>
            <th scope="row" className="teamRank">{player.rank}</th>
            <td className="teamName" onClick={(e) => handleClick(e, player.teamName)}>{player.teamName}</td>
            <td>{player.playerName}</td>
            <td>{player.goals}</td>
        </>
    );

    // Only displays players who have scored a goal in the Top Scorers table.
    const sortedPlayerRows = playerRows.sort((a, b) => a.rank - b.rank);
    let scoringPlayers = []

    for (let i=0; i < sortedPlayerRows.length; i++) {
        if (sortedPlayerRows[i].goals > 0)
            scoringPlayers.push(sortedPlayerRows[i])
    }

    return <Table headers={headers} rows={scoringPlayers} renderRow={renderRow} onClick={onTeamClick} />;
}

export default ScorersTable;