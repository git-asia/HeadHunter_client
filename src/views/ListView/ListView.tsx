import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { NavbarStudents } from '../../components/NavbarStudents/NavbarStudents';
import { Pagination } from '../../components/Pagination/Pagination';
import { ReservedUserData } from '../../components/ReservedUserData/ReservedUserData';
import { SearchFilterBar } from '../../components/SearchFilterBar/SearchFilterBar';
import { UserData } from '../../components/UserData/UserData';
import { initialStateFilter } from '../../components/utils/initialState.filter';
import { FilterContext } from '../../contexts/filter.context';
import { PaginationContext } from '../../contexts/pagination.context';

import './ListView.scss';
import '../../index.scss'

export const ListView = () => {

    const [filterCon,setFilterCon] = useState(initialStateFilter)
    const [pagination,setPagination] = useState({ page: 0, rowsPerPage:10, allRecords:0 });

    return (
        <>
            <Header/>
            <div className="page-wrapper">
                <FilterContext.Provider value={{ filterCon, setFilterCon }}>
                    <PaginationContext.Provider value={{ pagination, setPagination }}>
                        <div className="main-wrapper">
                            <NavbarStudents/>
                            <SearchFilterBar/>
                            <div className="list-wrapper">
                                <Routes>
                                    <Route path="/" element={<UserData />}/>
                                    <Route path="/reserved" element={<ReservedUserData />}/>
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
