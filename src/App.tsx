import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import { AuthWrapper } from "./components/Auth/AuthWrapper";
import { ListView } from "./views/ListView/ListView";
import { CVView } from "./views/CVView/CVView";
import { CVEdit } from "./views/CVEdit/CVEdit";
import { Login } from "./components/Login/Login";

import "./index.scss"


export const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(true); //do zmiany w momencie przekazywania wartości z backend

  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Login  setLoggedIn={setLoggedIn}/>} />
        </Route>
        <Route  path="/" element={<AuthWrapper isLoggedIn={isLoggedIn}/>}>
          <Route path="/list" element={<ListView />}/>
          <Route path="/cv" element={<CVView />}/>
          <Route path="/edit" element={<CVEdit />}/>
        </Route>
      </Routes>
    </>
  );
};

