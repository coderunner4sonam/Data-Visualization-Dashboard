import React from "react";

const AccountList = () => {
  return (
    <div style={dropListStyle}>
      <ul style={listStyle} className="hover">
        <li style={listItemStyle} >My Profile</li>
        <li style={listItemStyle} >Settings</li>
        <li style={listItemStyle} >Login</li>
        <li style={listItemStyle} >Sign Up</li>
      </ul>
    </div>
  );
};

const dropListStyle: React.CSSProperties = {
  height: "196px",
  width: "150px",
  position: "absolute",
  top: "73px",
  right: "5px",
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
};

export default AccountList;
