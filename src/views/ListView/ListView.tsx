import React, { useState } from "react";
import { NavbarStudents } from "../../components/NavbarStudents/NavbarStudents";
import { UserData } from "../../components/UserData/UserData";
import {Pagination} from "../../components/Pagination/Pagination";
import { Header } from "../../components/Header/Header";
import {SearchFilterBar} from "../../components/SearchFilterBar/SearchFilterBar";
import {FilterContext} from "../../contexts/filter.context";
import {PaginationContext} from "../../contexts/pagination.context";
import {ReservedUserData} from "../../components/ReservedUserData/ReservedUserData";
import {Route, Routes} from "react-router-dom";

import "./ListView.scss";
import "../../index.scss"


const initialState = {
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
    expectedSalary: {
        min: "",
        max: "",
    },
    canTakeApprenticeship: null,
    monthsOfCommercialExp: '0',
    courseCompletion: 1,
    courseEngagement: 1,
    projectDegree: 1,
    teamProjectDegree: 1,
};

export const ListView = () => {

    const [filterCon,setFilterCon] = useState(initialState)
    const [pagination,setPagination] = useState({page: 0, rowsPerPage:10, allRecords:0});

    return (
        <>
            <Header/>
            <div className="page-wrapper">
                <FilterContext.Provider value={{filterCon, setFilterCon}}>
                    <PaginationContext.Provider value={{ pagination, setPagination}}>
                        <div className="main-wrapper">
                            <NavbarStudents/>
                            <SearchFilterBar/>
                            <div className="list-wrapper">
                                <Routes>
                                    <Route path="" element={<UserData/>}/>
                                    <Route path="reserved" element={<ReservedUserData />}/>
                                </Routes>
                            </div>
                        </div>
                      <Pagination/>
                    </PaginationContext.Provider>
                </FilterContext.Provider>
            </div>
        </>
    );
};

