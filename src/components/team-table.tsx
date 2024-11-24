import Table from './table';

const TeamTable = ({ teamsData, onTeamClick}) => {

    // // Navigate to the individual team view.
    // const handleClick = (event) => {
    //     event.preventDefault();
    //     onClick(teamsData.teams);
    // }

    const headers = ["Rank", "Team", "W", "L", "D", "P%", "PF", "PA", "LP"];
    const renderRow = (team, handleClick) => (
        <>
        
            <th scope="row" className="teamRank">{team.rank}</th>
            <td className="teamName" onClick={(e) => handleClick(e, team.id)}>{team.teamName}</td>
            <td>{team.wins}</td>
            <td>{team.draws}</td>
            <td>{team.losses}</td>
            <td>{team.percent}%</td>
            <td>{team.pointsFor}</td>
            <td>{team.pointsAgainst}</td>
            <td className="leaguePoints">{team.leaguePoints}</td>
        </>
    );

    return <Table headers={headers} rows={teamsData.teams} renderRow={renderRow} onClick={onTeamClick} />;
}

export default TeamTable;