import React from "react";
import {Routes, Route} from 'react-router-dom';
import { ListView } from "./views/ListView/ListView";
import { CVView } from "./views/CVView/CVView";
import { Login } from "./components/Login/Login";

import "./index.scss"

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/list"
               element={<ListView/>}/>
        <Route path="/cv" element={<CVView/>}/>
      </Routes>
    </>
  );
};

