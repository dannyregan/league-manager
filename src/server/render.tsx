import reactDOMServer from "react-dom/server"
import { fetchTeam, fetchTeams } from "./api-client"

import App from "../components/app"

const serverRender = async (teamId) => {
    let initialData = {};

    if (teamId) {
        const teamData = await fetchTeam(teamId);
        initialData = { currentTeam: teamData };
    } else {
        const leagueData = await fetchTeams();
        initialData = { teams: leagueData };
    }

    const initialMarkup = reactDOMServer.renderToString(<App initialData={initialData} />);

    return { initialMarkup, initialData };
};

export default serverRender;