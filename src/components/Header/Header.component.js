import React from "react";
import { Figure } from "react-bootstrap";
import "./header.style.scss";

const Header = ({ msg, fName, lName, logo }) => {
  return (
    <div className="header">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{fName + " " + lName + ","}</span>
        <span>{msg + "."}</span>
      </div>
      <Figure>
        <Figure.Image style={{}} src={logo} />
      </Figure>
    </div>
  );
};

export default Header;
