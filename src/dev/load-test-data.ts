import { connectClient, stopClient } from "../server/db";

async function main() {
    const client = await connectClient();

    await client.collection("contests").deleteMany({});

    const resp = await client.collection("contests").insertMany([
        {
            _id: "001",
            name: "USA",
            players: [
                { _id: "011", name: "Danny" },
                { _id: "012", name: "Alfie" }
            ],
        },
        {
            _id: "002",
            name: "Spain",
            players: [
                { _id: "013", name: "Curro" },
                { _id: "014", name: "Javier" }
            ],
        }
    ]);

    console.info("Inserted Teams:", resp.insertedCount);

    stopClient();
}

main();