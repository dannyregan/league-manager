import Header from './header'

const App = ({ initialData }) => {
    return (
        <div className="container">
            <Header message="League Standings"/>

            <div className="contest-list">
                {initialData.contests.map((contest) => {
                    return (
                        <div className="contest-preview" key={contest._id}>
                            <div className="teamName">{contest.teamName}</div>
                            <div className="players">
                                {contest.players.map((player) => (
                                    <div className="playerName" key={player._id}>{player.playerName}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default App;