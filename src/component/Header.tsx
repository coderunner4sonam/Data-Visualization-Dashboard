import React, { useState } from "react";
import DefaultProfile from "../assets/DefaultProfile.jpg";
import AccountList from "./AccountList";
import SideBar from "./SideBar";
import HamburgerMenu from "./HamburgerMenu";

const Header: React.FC = () => {
  const [openAccountList, setOpenAccountList] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <div style={ContainerStyle}>
      <div style={logoContainerStyle}>
        {openSideBar && <SideBar />}
        <div style={LogoStyle} onClick={() => setOpenSideBar(!openSideBar)}>
          <HamburgerMenu />
        </div>
        <p style={{ color: "#FFD705", fontSize: "24px" }}>
          Visualization Dashboard
        </p>
      </div>
      <div style={dropdownStyle}>
        <img
          src={DefaultProfile}
          style={DefaImgStyle}
          onClick={() => setOpenAccountList(!openAccountList)}
          alt="Profile"
        />
        {openAccountList && <AccountList />}
      </div>
    </div>
  );
};

const ContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #ddd",
  height: "12vh",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  background: "#14161A",
  
};
const LogoStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
  width: "180px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
};
const hamburgerMenuImgStyle: React.CSSProperties = {
  height: "60px",
  width: "90px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
};
const logoContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};
const dropdownStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "12vh",
  width: "100px",
  marginRight: "10px",
};
const DefaImgStyle: React.CSSProperties = {
  height: "8.5vh",
  width: "54px",
  borderRadius: "30px",
};

export default Header;
