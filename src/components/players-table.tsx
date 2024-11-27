import Table from './table';

const PlayersTable = ({ playersData, onTeamClick }) => {
    const headers = ["Rank", "Player", "Points Scored"];

    console.log("Players" , playersData)

    const sortedPlayersData = playersData.sort((a, b) => a.rank - b.rank);
    
    const renderRow = (player, handleClick) => {
        let processedPlayer = player;
        if (player.length === 1) {
            processedPlayer = player[0];
        }

    console.log("Processedplayer", processedPlayer)
    

        return (
        <>
        
            <th scope="row">{processedPlayer.rank}</th>
            <td className="teamName">{processedPlayer.playerName}</td>
            <td>{processedPlayer.goals}</td>
        </>
    )};

    const data = Array.isArray(sortedPlayersData) ? sortedPlayersData : [sortedPlayersData]

    return <Table headers={headers} rows={data} renderRow={renderRow} onClick={onTeamClick} />;
}

export default PlayersTable;