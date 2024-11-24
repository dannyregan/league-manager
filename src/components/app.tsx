// import { ClassificationTypeNames } from 'typescript';
import { useState } from "react"

import LeagueStandings from './league-standings';
import Header from './header'
// import TeamTable from "./team-table"
// import ScorersTable from './scorers-table';
// import { MongoTailableCursorError } from 'mongodb';

const App = ({ initialData }) => {

    const [page, setPage] = useState("league-standings");

    const navigateToTeam = (teamID) => {
        setPage("team")
        console.log(teamID)
    }

    const pageContent = () => {
        switch (page) {
            case "league-standings":
                return <LeagueStandings initialData={initialData} onTeamClick={navigateToTeam}/>
            case "team":
                return "..."
                
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