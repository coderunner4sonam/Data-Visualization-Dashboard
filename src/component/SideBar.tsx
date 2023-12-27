import React from "react";

const SideBar = () => {
  return (
    <div style={dropListStyle}>
      <ul style={listStyle} className="hover">
        <li style={listItemStyle}>Intensity</li>
        <li style={listItemStyle}>Likelihood</li>
        <li style={listItemStyle}>Relevance</li>
        <li style={listItemStyle}>Year</li>
        <li style={listItemStyle}>Country</li>
        <li style={listItemStyle}>Topics</li>
        <li style={listItemStyle}>Region</li>
        <li style={listItemStyle}>City</li>
      </ul>
    </div>
  );
};

const dropListStyle: React.CSSProperties = {
  height: "520px",
  width: "180px",
  position: "absolute",
  top: "71px",
  left: "2px",
  marginRight: "6px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
  background: "#fff",
};
const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  textAlign: "center",
};

const listItemStyle: React.CSSProperties = {
  padding: "15px",
  borderBottom: "1px solid #ccc",
  transition: "background 0.3s ease",
  cursor: "pointer",
  fontSize:"20px"
};

export default SideBar;
