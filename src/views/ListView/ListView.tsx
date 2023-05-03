import React from "react";
import { NavbarStudents } from "../../components/NavbarStudents/NavbarStudents";
import { UserData } from "../../components/UserData/UserData";
import {Pagination} from "../../components/Pagination/Pagination";

import "./ListView.scss";
import "../../_variables.sass";

export const ListView = () => {
  return (
    <>
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
