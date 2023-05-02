import React from "react";
import { UserData } from "../../components/UserData/UserData";
import {Pagination} from "../../components/Pagination/Pagination";

import "./ListView.scss";
import "../../_variables.sass";

export const ListView = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="list-wrapper">{/* <UserData /> */}</div>
        <Pagination/>
      </div>
    </>
  );
};
