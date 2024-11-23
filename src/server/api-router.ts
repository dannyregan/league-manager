import express from "express"
import cors from "cors";

import { connectClient } from "./db";

const router = express.Router();
router.use(cors());

router.get("/teams", async (req, res) => {
    const client = await connectClient();

    const teams = await client.collection("teams")
        .find()
        .toArray();

    res.send({ teams });
});

export default router