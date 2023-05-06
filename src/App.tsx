import React from "react";
import {Routes, Route} from 'react-router-dom';
import { ListView } from "./views/ListView/ListView";
import { CVView } from "./views/CVView/CVView";
import { Login } from "./components/Login/Login";

import "./index.scss"
import { AuthWrapper } from "./components/Auth/AuthWrapper";


export const App = () => {
  const isLoggedIn = true; //do zmiany w momencie przekazywania wartości z backend

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/list"
               element={<AuthWrapper isLoggedIn={isLoggedIn}><ListView/></AuthWrapper>}/>
        <Route path="/cv"
               element={<AuthWrapper isLoggedIn={isLoggedIn}><CVView/></AuthWrapper>}/>
      </Routes>
    </>
  );
};

