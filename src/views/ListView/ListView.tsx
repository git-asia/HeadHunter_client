import React, { useState } from "react";
import { NavbarStudents } from "../../components/NavbarStudents/NavbarStudents";
import { UserData } from "../../components/UserData/UserData";
import {Pagination} from "../../components/Pagination/Pagination";
import { Header } from "../../components/Header/Header";
import {SearchFilterBar} from "../../components/SearchFilterBar/SearchFilterBar";
import {FilterContext} from "../../contexts/filter.context";
import {PageContext} from "../../contexts/page.context";
import {RowsPerPage} from "../../contexts/rowsPerPage.context";

import "./ListView.scss";
import "../../index.scss"
import {API_URL} from "../../config/apiUrl";

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

    const FragmentsValues =[
        {
            value: '5',
            header: 'Ocena przejścia kursu',
        },
        {
            value: '5',
            header: 'Ocena aktywności i zaangażowania na kursie',
        },
        {
            value: '4',
            header: 'Ocena kodu w projekcie własnym',
        },        {
            value: '5',
            header: 'Ocena pracy w zespole w Scrum',
        },        {
            value: 'Biuro',
            header: 'Preferowane miejsce pracy',
        },
        {
            value: 'Warszawa',
            header: 'Docelowe miasto, gdzie chce pracować kandydat',
        },
        {
            value: 'Umowa o pracę',
            header: 'Oczekiwany typ kontraktu',
        },        {
            value: '8 000 zł',
            header: 'Oczekiwane wynagrodzenie miesięczne netto',
        },        {
            value: 'TAK',
            header: '8 000 zł',
        },
        {
            value: 'Komercyjne doświadczenie w programowaniu',
            header: '6 miesięcy',
        },
    ]

    const [filterCon,setFilterCon] = useState(initialState)
    const [page,setPage] = useState(0);
    const [rowsPerPage,setRowsPerPage] = useState(10);



    return (
        <>
            <Header/>
            <div className="page-wrapper">
                <RowsPerPage.Provider value={{rowsPerPage,setRowsPerPage}}>
                    <FilterContext.Provider value={{filterCon, setFilterCon}}>
                        <PageContext.Provider value={{ page, setPage}}>
                          <div className="list-wrapper">
                            <NavbarStudents/>
                            <SearchFilterBar/>
                             <UserData id={'fsadasdas'} name={'jakieś fajne imie'} FragmentsValues={FragmentsValues} />
                          </div>
                          <Pagination/>
                        </PageContext.Provider>
                    </FilterContext.Provider>
                 </RowsPerPage.Provider>
            </div>
        </>
    );
};

