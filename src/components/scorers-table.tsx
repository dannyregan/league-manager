import Table from './table';

const ScorersTable = ({ teamsData }) => {
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

    const renderRow = (row) => (
        <>
            <th scope="row" className="teamRank">{row.rank}</th>
            <td className="teamName">{row.teamName}</td>
            <td>{row.playerName}</td>
            <td>{row.goals}</td>
        </>
    );

    return <Table headers={headers} rows={playerRows} renderRow={renderRow} />;
}

export default ScorersTable;