import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputAdornment,
    TextField,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Paper,
    ToggleButtonGroup,
    ToggleButton,
    Box,
    Grid,
    RadioGroup,
    Radio,
    Autocomplete,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import StarIcon from '@mui/icons-material/Star';

import "./SearchFilterBar.scss";


type FilterState = {
    expectedTypeWork: {
        remoteWork: boolean;
        inOffice: boolean;
    },
    expectedContractType: {
        employmentContract: boolean;
        b2b: boolean;
        mandateContract: boolean;
        workContract: boolean;
    },
    expectedSalary:{
        min:string;
        max:string;

    },
    canTakeApprenticeship: boolean|null;
    monthsOfCommercialExp: string|null;
    [key: string]: any;
}

export const SearchFilterBar = () => {


    const [filters, setFilters] = useState<FilterState>({
        expectedTypeWork: {
            remoteWork: false,
            inOffice: false,
        },
        expectedContractType: {
            employmentContract: false,
            b2b: false,
            mandateContract: false,
            workContract: false,
        },
        expectedSalary:{
            min: '',
            max: '',
        },
        canTakeApprenticeship: null,
        monthsOfCommercialExp: null,
    });

    const filtersChange = ( stateName: string, substateName:string, value?: string | number | undefined| null) => {
        setFilters({
            ...filters,
            [stateName]: {
                ...filters[stateName],
                [substateName]: value ?? !filters[stateName][substateName],
            },
        });
    };

    const months: string[] = ['miesiąc', 'miesiące', 'miesięcy'];

    const monthList: string[] = Array.from({length: 30}, (_, i) => {
        const month: string = i + 1 + ' ' + months[2];
        if (i === 0) {
            return month.replace(months[2], months[0]);
        } else if (i === 1 || i === 2 || i === 3 || i % 10 === 2 || i % 10 === 3 || i % 10 === 4) {
            return month.replace(months[2], months[1]);
        } else {
            return month;
        }
    });



    const lookState = ()=>{
        console.log(filters);
        console.log(monthList)
    }










    const [showClearIcon, setShowClearIcon] = useState("none");
    const [search, setSearch] = useState('');
    const [checked, setChecked] = useState('box-star');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
        setSearch(event.target.value);
        console.log(search);
    };

    const handleClick = (): void => {
        setSearch('');
    };
    const handleChange22 = (event: React.MouseEvent<HTMLElement>, isChecked: string) => {
        if(checked==='box-star')
            setChecked('box-star-checked');
        else
            setChecked('box-star');
    };




    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const title= ['Ocena przejścia kursu','Ocena aktywności i zaangażowania na kursie', 'Ocena kodu w projekcie własnym', 'Ocena pracy w zespole w Scrum'];

    // const [checked, setChecked] = useState('box-star');
    //
    // const handletest = (event :any) => {
    //     setChecked(event.target.checked);
    //     if (event.target.checked) {
    //         setChecked('box-star-checked');;
    //     } else {
    //         setChecked('box-star');
    //     }
    // };

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
                                <ClearIcon sx={{ color: "#666666", fontSize: 50  }} /> {/* TODO nie działa zmiana wielkości ikony*/}
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
                    <Paper className="dialog-paper">
                    <DialogTitle>Filtrowanie</DialogTitle>


                    <DialogContent className="dialog">
                        {/*<FormGroup className="dialog">*/}



                        {/*{title.map((title,index) => (*/}
                        {/*    <div key={index}>*/}
                        {/*      <p className="title">{title}</p>*/}
                        {/*        <div >*/}
                        {/*            {[1, 2, 3, 4, 5].map((value) => (*/}
                        {/*                <FormControlLabel*/}
                        {/*                    key={value}*/}
                        {/*                    className={checked}*/}
                        {/*                    onChange={handletest}*/}
                        {/*                    control={*/}

                        {/*                        <Checkbox*/}
                        {/*                            icon={<StarIcon className="icon" />}*/}
                        {/*                            checkedIcon={<StarIcon className="icon-active" />}*/}

                        {/*                        />*/}

                        {/*                    }*/}
                        {/*                    label={<span className="text-checkbox">{value}</span>}*/}
                        {/*                    labelPlacement="start"*/}
                        {/*                />*/}
                        {/*            ))}*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    ))}*/}

                        {/*<div>*/}
                        {/*    <p className="title">Preferowane miejsce pracy</p>*/}
                        {/*    <FormControlLabel*/}


                        {/*        // onChange={handletest}*/}
                        {/*        className="box-star"*/}
                        {/*        control={*/}

                        {/*            <Checkbox*/}
                        {/*                icon={<StarIcon className="icon" />}*/}
                        {/*                checkedIcon={<StarIcon className="icon-active" />}*/}

                        {/*            />*/}

                        {/*        }*/}
                        {/*        label={<span className="text-checkbox">Praca zdalna</span>}*/}
                        {/*        labelPlacement="start"*/}
                        {/*    />*/}
                        {/*    <FormControlLabel*/}
                        {/*        className="box-star"*/}
                        {/*        onChange={handletest}*/}
                        {/*        control={*/}

                        {/*            <Checkbox*/}
                        {/*                disableRipple={true}*/}
                        {/*            />*/}

                        {/*        }*/}
                        {/*        label={<span className="text-checkbox">Praca w biurze</span>}*/}
                        {/*        labelPlacement="start"*/}
                        {/*    />*/}

                        {/*    <FormControlLabel*/}
                        {/*        className="box-star"*/}
                        {/*        control={*/}
                        {/*            <Checkbox*/}
                        {/*                // checked={checked}*/}
                        {/*                // onChange={handleCheckboxChange}*/}

                        {/*            />*/}
                        {/*        }*/}
                        {/*        label="Tekst labelki"*/}
                        {/*    />*/}

                        {/*</div>*/}


                        <p className="title">Preferowane miejsce pracy</p>
                        <ToggleButtonGroup>
                            <ToggleButton
                                value=''
                                onClick={() => filtersChange('expectedTypeWork', 'remoteWork')}
                                className={filters.expectedTypeWork.remoteWork ? 'box-star-checked' : 'box-star'}
                            >
                                <span className="text-checkbox">Praca zdalna</span>
                            </ToggleButton>

                            <ToggleButton
                                value=''
                                onClick={() =>filtersChange('expectedTypeWork', 'inOffice')}
                                className={filters.expectedTypeWork.inOffice ? 'box-star-checked' : 'box-star'}
                                style={{marginLeft: '16px'}}
                            >
                                <span className="text-checkbox">Praca w biurze</span>
                            </ToggleButton>
                        </ToggleButtonGroup>

                        <p className="title">Oczekiwany typ kontraktu</p>
                        <ToggleButtonGroup>
                            <ToggleButton
                                value=''
                                onClick={() =>filtersChange('expectedContractType', 'employmentContract')}
                                className={filters.expectedContractType.employmentContract ? 'box-star-checked' : 'box-star'}
                            >
                                <span className="text-checkbox">Umowa o pracę</span>
                            </ToggleButton>
                            <ToggleButton
                                value=''
                                onClick={() =>filtersChange('expectedContractType', 'b2b')}
                                className={filters.expectedContractType.b2b ? 'box-star-checked' : 'box-star'}
                                style={{marginLeft: '16px'}}
                            >
                                <span className="text-checkbox">B2B</span>
                            </ToggleButton>
                            <ToggleButton
                                value=''
                                onClick={() =>filtersChange('expectedContractType', 'mandateContract')}
                                className={filters.expectedContractType.mandateContract ? 'box-star-checked' : 'box-star'}
                                style={{marginLeft: '16px'}}
                            >
                                <span className="text-checkbox">Umowa zlecenie</span>
                            </ToggleButton>
                            <ToggleButton
                                value=''
                                onClick={() =>filtersChange('expectedContractType', 'workContract')}
                                className={filters.expectedContractType.workContract ? 'box-star-checked' : 'box-star'}
                                style={{marginLeft: '16px'}}
                            >
                                <span className="text-checkbox">Umowa o dzieło</span>
                            </ToggleButton>
                        </ToggleButtonGroup>

                        <p className="title">Oczekiwane wynagrodzenie miesięczne netto</p>
                        <Grid container alignItems="center">
                            <p className="text-checkbox">Od</p>
                            <TextField
                                className="box-star text-checkbox"
                                value={filters.expectedSalary.min}
                                placeholder="np. 1000"
                                variant="standard"
                                onChange={(event) =>filtersChange('expectedSalary', 'min',event.target.value)}
                            />
                            <p className="text-checkbox">Do</p>
                            <TextField
                                className="box-star"
                                value={filters.expectedSalary.max}
                                placeholder="np. 1000"
                                variant="standard"
                                onChange={(event) =>filtersChange('expectedSalary', 'max',event.target.value)}
                            />
                        </Grid>

                        <p className="title">Oczekiwane wynagrodzenie miesięczne netto</p>
                        <RadioGroup
                            name="controlled-radio-buttons-group"
                            onChange={(event) =>filtersChange('canTakeApprenticeship', '',event.target.value)}
                        >
                            <FormControlLabel value="true" control={<Radio />} label="Tak" className="text-checkbox" />
                            <FormControlLabel value="false" control={<Radio />} label="Nie"  className="text-checkbox"/>
                        </RadioGroup>

                        <p className="title">Oczekiwane wynagrodzenie miesięczne netto</p>

                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={monthList}
                            className="box-star text-checkbox"
                            onChange={(event,value) =>filtersChange('monthsOfCommercialExp', '', value)}
                            renderInput={(params) => <TextField {...params} label="Movie" className="box-star text-checkbox" />}
                        />



                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Anuluj</Button>
                        <Button onClick={lookState}>Zastosuj</Button>
                    </DialogActions>
                    </Paper>
                </Dialog>


        </div>
    <hr />

        </div>

    )

}