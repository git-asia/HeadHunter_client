import React from "react";
import { Header } from "./components/Header/Header";
import { ListView } from "./views/ListView/ListView";

import "./index.scss"

export const App = () => {

  return (
    <>
        <Header/>
        <ListView/>

    </>
  );
};

