import { ClassificationTypeNames } from 'typescript';
import Header from './header'

const App = ({ initialData }) => {
    return (
        <div className="container">
            <Header message="League Standings"/>
            <div className="teamInfo">
                <div className="rank">Rank</div>
                <div className="teamName">Team</div>
                <div className="wins">Wins</div>
                <div className="losses">Losses</div>
                <div className="points">Points</div>
            </div>
            <div className="team-list">
                {initialData.teams.map((team) => {
                    return (
                        <div className="team-preview" key={team._id}>
                            <div className="teamInfo">
                                <div className="rank">{team.rank}</div>
                                <div className="teamName">{team.teamName}</div>
                                <div className="wins">{team.wins}</div>
                                <div className="losses">{team.losses}</div>
                                <div className="points">{team.points}</div>
                            </div>
                            <div className="players">
                                <div className="tableHeader">
                                    <Header message="Player Name" />
                                    <Header message="Goals" />
                                </div>
                                {team.players.map((player) => (
                                    <div className="player" key={player._id}>
                                        <div className="playerName">{player.playerName}</div>
                                        <div className="goals">{player.goals}</div>
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