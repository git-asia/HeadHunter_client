import React from "react";
import {Dropdown} from "./Dropdown/Dropdown";
import logo from "../../assets/images/logo.png";
import {Container} from 'react-bootstrap';

import "./Header.scss";

export const Header = () => {
    return (
      <Container fluid className="header">
        <div className="header-wrapper mx-auto w-75">
          <img src={logo} alt="Logo" className="logo" />
          <Dropdown />
        </div>
      </Container>
    );
};