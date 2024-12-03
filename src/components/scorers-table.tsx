import Table from './table';
import { hasScored } from './hasScored';

const ScorersTable = ({ teamsData, onTeamClick }) => {
    const headers = [
        { label: "Rank", tooltip: "" },
        { label: "Team", tooltip: "" },
        { label: "Name", tooltip: "" },
        { label: "Goals", tooltip: ""}
    ];

    const playerRows = teamsData?.teams?.flatMap((team) =>
        team?.players?.map((player) => ({
            rank: player.rank,
            teamName: team.teamName,
            playerName: player.playerName,
            goals: player.goals,
        })) || []
    ) || [];

    const scoringPlayers = hasScored(playerRows)

    const renderRow = (player, handleClick) => (
        <>
            <th scope="row" className="teamRank">{player.rank}</th>
            <td className="teamName" onClick={(e) => handleClick(e, player.teamName)}>{player.teamName}</td>
            <td>{player.playerName}</td>
            <td>{player.goals}</td>
        </>
    );

    return <Table headers={headers} rows={scoringPlayers} renderRow={renderRow} onClick={onTeamClick} />;
}

export default ScorersTable;