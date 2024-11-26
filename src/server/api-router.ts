import express from "express"
import cors from "cors";

import { connectClient } from "./db";

const router = express.Router();
router.use(cors());

router.get("/teams", async (req, res) => {
    const client = await connectClient();

    // Fetches the api data and searches in the "teams" collection. It gives us back an array of the teams.
    const teams = await client
        .collection("teams")
        .find()
        .toArray();
    res.send({ teams });
});

router.get("/team/:teamID", async (req, res) => {
    const client = await connectClient();

    const team = await client
        .collection("teams")
        .findOne({ id: req.params.teamID })

        res.send({ team })
});

export default router