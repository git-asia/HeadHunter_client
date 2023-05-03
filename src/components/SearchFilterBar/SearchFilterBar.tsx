import React, {useState} from "react";
import {Button, FormControl, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import "./SearchFilterBar.scss";

export const SearchFilterBar = () => {

    const [showClearIcon, setShowClearIcon] = useState("none");
    const [search, setSearch] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
        setSearch(event.target.value);
        console.log(search);
    };

    const handleClick = (): void => {
        setSearch('');
    };
    return(
        <div className="SearchFilterBar-wrapper">
            <div className="container">
            <FormControl className="search">
                <TextField
                    variant="standard"
                    onChange={handleChange}
                    value={search}
                    placeholder="Szukaj"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" >
                                <SearchIcon className="icon" />   {/* TODO nie działa zmiana wielkości ikony*/}
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment
                                position="end"
                                style={{ display: showClearIcon }}
                                onClick={handleClick}
                            >
                                <ClearIcon sx={{ color: "#666666", fontSize: 50  }} /> {/* TODO nie działa zmiana wielkości ikony*/}
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>

            <Button
                className="button"
                id="composition-button"
                onClick={handleClick}
            >
                <FilterAltIcon className="filter-icon"/>
                <span className="text"> Filtrowanie </span>
            </Button>
        </div>
    <hr />

        </div>

    )

}