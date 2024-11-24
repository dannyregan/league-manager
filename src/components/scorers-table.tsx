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

    const sortedPlayerRows = playerRows.sort((a, b) => a.rank - b.rank);

    const renderRow = (player, handleClick) => (
        <>
            <th scope="row" className="teamRank">{player.rank}</th>
            <td className="teamName" onClick={(e) => handleClick(e, player.teamName)}>{player.teamName}</td>
            <td>{player.playerName}</td>
            <td>{player.goals}</td>
        </>
    );

    return <Table headers={headers} rows={sortedPlayerRows} renderRow={renderRow} onClick={onTeamClick} />;
}

export default ScorersTable;