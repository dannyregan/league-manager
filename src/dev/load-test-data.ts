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
            points: 9,
            players: [
                { _id: "playerDanny", playerName: "Danny", goals: 0 },
                { _id: "playerAlfie", playerName: "Alfie", goals: 0 },
                { _id: "playerTiago", playerName: "Tiago", goals: 10 }
            ]
        },
        {
            _id: "teamSpain",
            id: "Spain",
            teamName: "Spain",
            rank: 2,
            wins: 2,
            losses: 1,
            points: 7,
            players: [
                { _id: "playerJuan", playerName: "Juan", goals: 0 },
                { _id: "playerPepe", playerName: "Pepe", goals: 2 },
                { _id: "playerJoseMaría", playerName: "Jose María", goals: 6 }
            ]
        }
    ]);

    console.info("Inserted Teams:", resp.insertedCount);

    stopClient();
}

main();