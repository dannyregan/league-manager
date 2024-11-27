const Table = ({ headers, rows, renderRow, onClick }) => {

    // Navigate to the individual team view.
    const handleClick = (event, id) => {
        event.preventDefault();
        onClick(id);
    }
    
    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th 
                            key={index}
                            scope="col"
                            className={header === "Team" ? "team-header" : ""}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={row._id || index}>
                        {renderRow(row, handleClick)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;