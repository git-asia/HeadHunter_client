import * as React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, Icon, } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import avatar from '../../../assets/images/avatar-holder.png';

import './Dropdown.scss';

export const Dropdown = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('megakname');
    const gitName = localStorage.getItem('gitname');
    const linkAvatar = gitName? `https://github.com/${gitName}.png` : avatar;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [menuWidth, setMenuWidth] = useState(0);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();
        const width = rect.width;
        setMenuWidth(width);

    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const logout = () => {
        localStorage.removeItem('userid');
        localStorage.removeItem('gitname');
        localStorage.removeItem('megakname');
        navigate('/');
    }

    return (
        <div>
            <div className="dropdown-wrapper">
                <Button
                    className="dropdown__button"
                    id="composition-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Avatar alt="Imię Nazwisko" src={linkAvatar} />
                    <span className="text"> {userName} </span>
                    <Icon className="icon">
                        <ArrowDropDownIcon className="dropdown__icon"/>
                    </Icon>
                </Button>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        className: 'dropdown__menu',
                        style: { width: menuWidth },
                    }}
                >
                    <MenuItem  className="item" >Konto</MenuItem>
                    <MenuItem className="item" 
                        onClick={logout}
                    >Wyloguj</MenuItem>
                </Menu>
            </div>
        </div>
    );
};