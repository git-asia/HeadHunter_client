import React from 'react';

import logo from '../../assets/images/logo.png';

import { Dropdown } from './Dropdown/Dropdown';

import './Header.scss';

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