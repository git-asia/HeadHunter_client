import React from "react";
import { Header } from "./components/Header/Header";
import { ListView } from "./views/ListView/ListView";

import "./index.scss"
import {Pagination} from "./components/Pagination/Pagination";


export const App = () => {

  return (
    <>
        <Header/>
        <ListView/>

    </>
  );
};

