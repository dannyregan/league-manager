import { ClassificationTypeNames } from 'typescript';
import Header from './header'
import TeamTable from "./team-table"
import ScorersTable from './scorers-table';
import { MongoTailableCursorError } from 'mongodb';

const App = ({ initialData }) => {
    return (
        <div className="container">
            <Header message="League Standings"/>
            {/* <TeamTable teamsData={ initialData }/> */}
            <TeamTable teamsData={initialData}/>
            <Header message="Top Scorers" />
            <ScorersTable teamsData={initialData} />
        </div>
    );
};

export default App;