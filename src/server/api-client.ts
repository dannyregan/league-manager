import axios from "axios";

import { API_SERVER_URL } from "../public-config";


export const fetchTeams = async () => {
    const res = await axios.get(`${API_SERVER_URL}/teams`)

    return res.data
};

export const fetchTeam = async (teamID) => {
    const res = await axios.get(`${API_SERVER_URL}/team/${teamID}`)

    return res.data.team
};