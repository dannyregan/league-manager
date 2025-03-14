const Menu = ({ leagueName }) => {
    return (
        <div className="menu">
            <h1>{leagueName}</h1>
            <a href="/">League Standings </a>
        </div>
    )
};

export default Menu;