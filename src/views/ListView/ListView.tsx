import React from "react";

import { UserData } from "../../components/UserData/UserData";

import "./ListView.scss";
import "../../_variables.sass";
import {Pagination} from "../../components/Pagination/Pagination";


export const ListView = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="list-wrapper">
          <UserData />

        </div>
          <Pagination/>
      </div>
    </>
  );
};



