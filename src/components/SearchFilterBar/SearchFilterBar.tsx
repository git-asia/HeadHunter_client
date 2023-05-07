import React, {useState} from "react";
import {
    Button,
    Dialog,
    FormControl,
    InputAdornment,
    TextField,

} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {FilterWindow} from "./FilterWindow/FilterWindow";

import "./SearchFilterBar.scss";

export const SearchFilterBar = () => {

    const [showClearIcon, setShowClearIcon] = useState("none");
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
        setSearch(event.target.value);
        console.log(search);
    };

    const handleClick = (): void => {
        setSearch('');
        setShowClearIcon('none');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                                <SearchIcon className="icon" />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment
                                position="end"
                                style={{ display: showClearIcon }}
                                onClick={handleClick}
                            >
                                <ClearIcon className="icon" />
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>

            <Button
                className="button"
                id="composition-button"
                onClick={handleClickOpen}
            >
                <FilterAltIcon className="filter-icon"/>
                <span className="text"> Filtrowanie </span>
            </Button>

                <Dialog open={open} onClose={handleClose} className="dialog" >
                    <FilterWindow handleClose={handleClose} />
                </Dialog>

        </div>
    <hr />

        </div>

    )

}
