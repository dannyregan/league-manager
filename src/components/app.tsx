import { useState } from "react"

import LeagueStandings from './league-standings';
import Header from './header'
import TeamInfo from "./team-info";

const App = ({ initialData }) => {

    const [page, setPage] = useState("league-standings");
    const [currentTeam, setCurrentTeam] = useState({});

    const navigateToTeam = (teamID) => {
        setPage("team")
        console.log("setting current teamID", teamID)
        setCurrentTeam(teamID)
    }

    const pageContent = () => {
        switch (page) {
            case "league-standings":
                return <LeagueStandings initialData={initialData} onTeamClick={navigateToTeam}/>
            case "team":
                return <TeamInfo id={currentTeam}/>
                
        }
    }

    return (
        <div className="container">
            <Header message="International League" />
            {pageContent()}
            {/* <LeagueStandings initialData={initialData} /> */}
            {/* <Header message="League Standings"/>
            <TeamTable teamsData={ initialData }/>
            <Header message="Top Scorers" />
            <ScorersTable teamsData={initialData} /> */}
        </div>
    );
};

export default App;