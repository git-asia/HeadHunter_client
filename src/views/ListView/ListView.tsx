import React from "react";
import { NavbarStudents } from "../../components/NavbarStudents/NavbarStudents";
import { UserData } from "../../components/UserData/UserData";
import {Pagination} from "../../components/Pagination/Pagination";

import "./ListView.scss";
import "../../_variables.sass";
import { Header } from "../../components/Header/Header";


export const ListView = () => {
  return (
    <>
      <Header/>
      <div className="page-wrapper">
        <div className="list-wrapper">
          <NavbarStudents/>
           <div className="list-wrapper">{/* <UserData /> */}</div>
        </div>
        <Pagination/>
      </div>
    </>
  );
};
