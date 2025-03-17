const NewTeam = ({ onNewTeamSubmit }) => {
    return (
        <div className="newTeam-container">
            <div className="newTeam-header">
                <h1>Add a New Team</h1>
            </div>
            <div className="newTeam-form">
                <form onSubmit={onNewTeamSubmit}>
                    <input
                        type="text"
                        name="newTeam"
                        placeholder="Enter Team Name"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>

    )
}

export default NewTeam