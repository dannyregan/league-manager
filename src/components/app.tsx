import { useState, useEffect } from "react"

import LeagueStandings from './league-standings';
import Header from './header'
import TeamInfo from "./team-info";
import Menu from "./menu";
import NewTeam from "./addTeam";

const isBrowser = typeof window !== "undefined";

const App = ({ initialData }) => {

    const urlPath = isBrowser ? window.location.pathname : "/";
    const initialTeamId = urlPath.startsWith("/team/") ? urlPath.split("/team/")[1] : undefined;

    const [page, setPage] = useState(initialTeamId ? "team" : "league-standings");
    const [currentTeam, setCurrentTeam] = useState(initialTeamId || initialData.currentTeam?.id);

    useEffect(() => {
        if (isBrowser) {
            window.onpopstate = (event) => {
                const newPage = event.state?.teamID ? "team" : "league-standings";
                setPage(newPage);
                setCurrentTeam(event.state?.teamID);
            };
        }
    }, [])

    const navigateToTeam = (teamID) => {
        if (isBrowser) {
            window.history.pushState({teamID}, "", `/team/${teamID}`);
        }
        setPage("team");
        setCurrentTeam(teamID);
    };

    const pageContent = () => {
        switch (page) {
            case "league-standings":
                return <LeagueStandings initialData={initialData} onTeamClick={navigateToTeam}/>
            case "team":
                return <TeamInfo id={currentTeam} onTeamClick={navigateToTeam}/>
            case "new-team":
                return <NewTeam />
        }
    };

    const handleNavigate = (newPage) => {
        if (isBrowser) {
            const newURL = newPage === "league-standings" ? "/" : `/${newPage}`;
            window.history.pushState({}, "", newURL);
        }
        setPage(newPage);
    };

    return (
        <div className="container">
            <Menu leagueName="International League" onNavigate={handleNavigate} />
            {pageContent()}
            <div id="tooltip" className="tooltip"></div>
        </div>
    );
};

export default App;