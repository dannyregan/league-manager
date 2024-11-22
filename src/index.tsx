import { createRoot } from "react-dom/client";
import axios from "axios";

import { API_SERVER_URL } from "./public-config";
import App from './components/app'

const container = document.getElementById("app");
const root = createRoot(container)

axios.get(`${API_SERVER_URL}/teams`)
    .then((res) => {
        root.render(<App initialData={ { teams: res.data.teams}} />);
    })
