import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ListView } from "./views/ListView/ListView";
import { CVView } from "./views/CVView/CVView";
import { Login } from "./components/Login/Login";
import "./index.scss";
import { AuthWrapper } from "./components/Auth/AuthWrapper";

export const App = () => {
  const [isLoggedIn] = useState(true); //do zmiany w momencie przekazywania wartości z backend, dodanie właściwości setLoggedIn do <Login/>

  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
        </Route>
        <Route  path="/" element={<AuthWrapper isLoggedIn={isLoggedIn}/>}>
          <Route path="/list" element={<ListView />}/>
          <Route path="/cv" element={<CVView />}/>
        </Route>
      </Routes>
    </>
  );
};

