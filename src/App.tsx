import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import { AuthWrapper } from "./components/Auth/AuthWrapper";
import { ListView } from "./views/ListView/ListView";
import { CVView } from "./views/CVView/CVView";
import { Login } from "./components/Login/Login";

import "./index.scss"
import {AddHr} from "./components/AddHr/AddHr";


export const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(true); //do zmiany w momencie przekazywania wartości z backend

  return (
    <>
      <Routes>
        <Route path="/addhr" element={<AddHr/>}/>
        <Route>
          <Route path="/" element={<Login  setLoggedIn={setLoggedIn}/>} />
        </Route>
        <Route  path="/" element={<AuthWrapper isLoggedIn={isLoggedIn}/>}>
          <Route path="/list" element={<ListView />}/>
          <Route path="/cv" element={<CVView />}/>
        </Route>
      </Routes>
    </>
  );
};

