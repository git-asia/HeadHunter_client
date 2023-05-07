import React from "react";
import { NavbarStudents } from "../../components/NavbarStudents/NavbarStudents";
//import { UserData } from "../../components/UserData/UserData";
import {Pagination} from "../../components/Pagination/Pagination";
import { Header } from "../../components/Header/Header";
import {SearchFilterBar} from "../../components/SearchFilterBar/SearchFilterBar";

import "./ListView.scss";
import "../../index.scss"



export const ListView = () => {
    return (
        <>
            <Header/>
            <div className="page-wrapper">
                <div className="list-wrapper">
                    <NavbarStudents/>
                    <SearchFilterBar/>
                    <div className="list-wrapper">{/* <UserData /> */}</div>
                </div>
                <Pagination/>
            </div>
        </>
    );
};