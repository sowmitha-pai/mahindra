import React from "react";

function DataTable({ data }) {
  // console.log(data);
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  const keysList = Object.keys(data[0]);
  // console.log(keysList);

  const tableStyle = {
    border: "1px solid #ccc",
    borderCollapse: "collapse",
    width: "100%",
  };

  const thStyle = {
    border: "1px solid #ccc",
    padding: "8px",
    backgroundColor: "#f0f0f0",
  };

  const tdStyle = {
    border: "1px solid #ccc",
    padding: "8px",
    paddingLeft: "3rem",
    fontSize: "0.95rem",
  };

  return (
    <div style={{ "overflow": "scroll", "maxHeight": "50vh", "maxWidth": "60vw" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            {keysList.map((key) => (
              <th key={key} style={thStyle}>
                {key
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {keysList.map((key) => (
                <td key={key} style={tdStyle}>
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
