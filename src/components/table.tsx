const Table = ({ headers, rows, renderRow, onClick }) => {

    const showTooltip = (event, text) => {
        const tooltip = document.getElementById("tooltip");
        tooltip.textContent = text; // Set tooltip text
        tooltip.style.opacity = "1"; // Make it visible
        tooltip.style.left = `${event.pageX + 10}px`; // Position it
        tooltip.style.top = `${event.pageY + 10}px`; // Adjust position near cursor
    };
    
    const hideTooltip = () => {
        const tooltip = document.getElementById("tooltip");
        tooltip.style.opacity = "0"; // Hide the tooltip
    };

    // Navigate to the individual team view.
    const handleClick = (event, id) => {
        event.preventDefault();
        onClick(id);
    }
    
    return (
        <table>
            <thead id={'table-headers'}>
                <tr>
                    {headers.map((header, index) => (
                        <th
                        key={index}
                        className={header.label === "Team" ? "team-header" : ""}
                        data-tooltip={header.tooltip}
                        // onMouseEnter={header.tooltip !== "" ? (e) => showTooltip(e, header.tooltip) : {}}
                        onMouseEnter={(e) => showTooltip(e, header.tooltip)}
                        onMouseLeave={hideTooltip}>

                        {header.label}

                        </th>
                        // <th 
                        //     key={index}
                        //     scope="col"
                        //     className={header === "Team" ? "team-header" : ""}>{header}</th>
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