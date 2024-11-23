import Table from './table';

const TeamTable = ({ teamsData }) => {
    const headers = ["Rank", "Team", "W", "L", "D", "P%", "PF", "PA", "LP"];
    const renderRow = (team) => (
        <>
            <th scope="row" className="teamRank">{team.rank}</th>
            <td className="teamName">{team.teamName}</td>
            <td>{team.wins}</td>
            <td>{team.draws}</td>
            <td>{team.losses}</td>
            <td>{team.percent}%</td>
            <td>{team.pointsFor}</td>
            <td>{team.pointsAgainst}</td>
            <td className="leaguePoints">{team.leaguePoints}</td>
        </>
    );

    return <Table headers={headers} rows={teamsData.teams} renderRow={renderRow} />;
}

export default TeamTable;