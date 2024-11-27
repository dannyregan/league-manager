import Table from './table';

const TeamTable = ({ teamsData, onTeamClick }) => {
    const headers = ["Rank", "Team", "W", "L", "D", "P%", "PF", "PA", "LP"];
    
    const renderRow = (team, handleClick) => {
        let processedTeam = team;
        if (team.length === 1) {
            processedTeam = team[0];
        }

        return (
        <>
        
            <th scope="row" className="teamRank">{processedTeam.rank}</th>
            <td className="teamName" onClick={(e) => handleClick(e, processedTeam.id)}>{processedTeam.teamName}</td>
            <td>{processedTeam.wins}</td>
            <td>{processedTeam.losses}</td>
            <td>{processedTeam.draws}</td>
            <td>{processedTeam.percent}%</td>
            <td>{processedTeam.pointsFor}</td>
            <td>{processedTeam.pointsAgainst}</td>
            <td className="leaguePoints">{processedTeam.leaguePoints}</td>
        </>
    )};

    const data = Array.isArray(teamsData.teams) ? teamsData.teams : [teamsData]

    return <Table headers={headers} rows={data} renderRow={renderRow} onClick={onTeamClick} />;
}

export default TeamTable;