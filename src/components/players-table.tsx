import { hasScored } from './hasScored';
import Table from './table';

const PlayersTable = ({ playersData, onTeamClick }) => {
    const headers = ["Rank", "Player", "Points Scored"];

    const scoringPlayers = hasScored(playersData)
    
    const renderRow = (player, handleClick) => {
        let processedPlayer = player;
        if (player.length === 1) {
            processedPlayer = player[0];
        }

        if (player.goals === 0) {
            processedPlayer.rank = "NA"
        }

        return (
        <>
            <th scope="row">{processedPlayer.rank}</th>
            <td className="teamName">{processedPlayer.playerName}</td>
            <td>{processedPlayer.goals}</td>
        </>
    )};

    const data = Array.isArray(playersData) ? playersData : [playersData]

    return <Table headers={headers} rows={data} renderRow={renderRow} onClick={onTeamClick} />;
}

export default PlayersTable;