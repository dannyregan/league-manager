import { sortArray } from "./sortArray";

export const hasScored = (playerRows) => {
    sortArray(playerRows)
    const scoringPlayers = []
    for (let i=0; i < playerRows.length; i++) {
        if (playerRows[i].goals > 0)
            scoringPlayers.push(playerRows[i])
    }
    return scoringPlayers
};