import React from "react";
import avatar from "../../../assets/images/avatar-holder.png";

import './Dropdown.scss';

export const Dropdown = () => {
    return (
            <div className="dropdown-wrapper">
                <img src={avatar} alt="avatar" className="avatar" />
                <p className="user-name">Imię Nazwisko</p>
                <i className="bi bi-caret-down-fill"></i>
            </div>
    );
};