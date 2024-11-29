import { useState, useEffect } from "react"

import LeagueStandings from './league-standings';
import Header from './header'
import TeamInfo from "./team-info";

const App = ({ initialData }) => {

    const [page, setPage] = useState("league-standings");
    const [currentTeam, setCurrentTeam] = useState({});

    useEffect(() => {
        window.onpopstate = (event) => {
            const newPage = event.state?.teamID ? "team" : "league-standings"
            setPage(newPage);
            setCurrentTeam(event.state?.teamID);
        };
    }, [])

    const navigateToTeam = (teamID) => {
        window.history.pushState({teamID}, "", `/team/${teamID}`);
        setPage("team");
        setCurrentTeam(teamID);
    }

    const pageContent = () => {
        switch (page) {
            case "league-standings":
                return <LeagueStandings initialData={initialData} onTeamClick={navigateToTeam}/>
            case "team":
                return <TeamInfo id={currentTeam} onTeamClick={navigateToTeam}/>
                
        }
    }

    return (
        <div className="container">
            <Header message="International League" />
            {pageContent()}
            <div id="tooltip" className="tooltip"></div>
            {/* <LeagueStandings initialData={initialData} /> */}
            {/* <Header message="League Standings"/>
            <TeamTable teamsData={ initialData }/>
            <Header message="Top Scorers" />
            <ScorersTable teamsData={initialData} /> */}
        </div>
    );
};

export default App;