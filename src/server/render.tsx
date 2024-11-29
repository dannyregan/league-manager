import reactDOMServer from "react-dom/server"
import { fetchTeams } from "./api-client"

import App from "../components/app"

const serverRender = async () => {
    const teams = await fetchTeams()

    const initialMarkup = reactDOMServer.renderToString(<App initialData={{ teams }} />)

    return { initialMarkup, initialData: [teams] }
};

export default serverRender;