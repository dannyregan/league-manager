const Menu = ({ leagueName, onNavigate }) => {
    return (
        <div className="menu">
            <div>
                <h1>{leagueName}</h1>
            </div>
            <div>
                <button className="menuButton" onClick={() => onNavigate("new-team")}>+ New Team</button>
                <button className="menuButton" onClick={() => onNavigate("league-standings")}>League Standings</button>
            </div>
        </div>
    )
};

export default Menu;