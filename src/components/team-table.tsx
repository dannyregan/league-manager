import Table from './table';

const TeamTable = ({ teamsData }) => {
    const headers = ["Rank", "Team", "W", "L", "D", "P%", "PF", "PA", "LP"];
    const renderRow = (team) => (
        <>
            <th scope="row">{team.rank}</th>
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


// const TeamTable = ({ teamsData }) => {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th scope="col">Rank</th>
//                     <th scope="col" className="teamName">Team</th>
//                     <th scope="col">W</th>
//                     <th scope="col">D</th>
//                     <th scope="col">L</th>
//                     <th scope="col">P%</th>
//                     <th scope="col">PF</th>
//                     <th scope="col">PA</th>
//                     <th scope="col">LP</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {teamsData.teams.map((team) => {
//                     return (
//                         <tr key={team._id}>
//                             <th scope="row">{team.rank}</th>
//                             <td className="teamName">{team.teamName}</td>
//                             <td>{team.wins}</td>
//                             <td>{team.draws}</td>
//                             <td>{team.losses}</td>
//                             <td>{team.percent}%</td>
//                             <td>{team.pointsFor}</td>
//                             <td>{team.pointsAgainst}</td>
//                             <td className="leaguePoints">{team.leaguePoints}</td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
//         </table>
//     )
// }

export default TeamTable;