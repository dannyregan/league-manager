const Table = ({ headers, rows, renderRow}) => {
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
                        {renderRow(row)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;