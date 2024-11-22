import express from "express"
import cors from "cors";

const router = express.Router();
router.use(cors());

import testData from "../test-data.json"

router.get("/teams", (req, res) => {
    res.send({ teams: testData });
});

export default router