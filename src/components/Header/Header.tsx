import React from "react";
import {Dropdown} from "./Dropdown/Dropdown";
import logo from "../../assets/images/logo.png";

import "./Header.scss";

export const Header = () => {
    return (
      <div className="header">
        <div className="header-wrapper">
          <img src={logo} alt="Logo" className="logo" />
          <Dropdown />
        </div>
      </div>
    );
};