import { connectClient, stopClient } from "../server/db";

async function main() {
    const client = await connectClient();

    await client.collection("teams").deleteMany({});

    const resp = await client.collection("teams").insertMany([
        {
            _id: "teamUSA",
            id: "UK + USA",
            teamName: "UK + USA",
            rank: 1,
            wins: 3,
            losses: 0,
            draws: 0,
            percent: 100,
            pointsFor: 23,
            pointsAgainst: 9,
            leaguePoints: 9,
            players: [
                { _id: "playerDanny", playerName: "Danny", goals: 0, rank: 7 },
                { _id: "playerAlfie", playerName: "Alfie", goals: 0, rank: 6 },
                { _id: "playerTiago", playerName: "Tiago", goals: 10, rank: 1 }
            ]
        },
        {
            _id: "teamSpain",
            id: "Spain",
            teamName: "Spain",
            rank: 2,
            wins: 2,
            losses: 1,
            draws: 0,
            percent: 67,
            pointsFor: 19,
            pointsAgainst: 11,
            leaguePoints: 9,
            players: [
                { _id: "playerJuan", playerName: "Juan", goals: 0, rank: 8 },
                { _id: "playerPepe", playerName: "Pepe", goals: 2, rank: 4 },
                { _id: "playerJoseMaría", playerName: "Jose María", goals: 6, rank: 2 }
            ]
        },
        {
            _id: "teamFrance",
            id: "France",
            teamName: "France",
            rank: 3,
            wins: 2,
            losses: 1,
            draws: 0,
            percent: 67,
            pointsFor: 24,
            pointsAgainst: 15,
            leaguePoints: 7,
            players: [
                { _id: "playerAntoine", playerName: "Antoine", goals: 0, rank: 9 },
                { _id: "playerLuca", playerName: "Luca", goals: 2, rank: 5 },
                { _id: "playerClaude", playerName: "Claude", goals: 6, rank: 3 }
            ]
        }
    ]);

    console.info("Inserted Teams:", resp.insertedCount);

    stopClient();
}

main();