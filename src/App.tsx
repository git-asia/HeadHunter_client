import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';

import { AddHr } from './components/AddHr/AddHr';
import { AuthWrapper } from './components/Auth/AuthWrapper';
import { ChangeDataUser } from './components/ChangeDataUser/ChangeDataUser';
import { Login } from './components/Login/Login';
import { TestToken } from './components/TestToken/TestToken';
import { CVEdit } from './views/CVEdit/CVEdit';
import { CVView } from './views/CVView/CVView';
import { ListView } from './views/ListView/ListView';

import './index.scss'

export const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(true); //do zmiany w momencie przekazywania wartości z backend

    return (
        <>
            <Routes>
                <Route path="/addhr" element={<AddHr/>}/>
                <Route path="/cv" element={<CVView />}/>
                <Route path="/log/:token" element={<TestToken />}/>
                <Route path="/change-data-user" element={<ChangeDataUser />}/>
                <Route>
                    <Route path="/" element={<Login  setLoggedIn={setLoggedIn}/>} />
                </Route>
                <Route  path="/" element={<AuthWrapper isLoggedIn={isLoggedIn}/>}>
                    <Route path="/list/*" element={<ListView />}/>
                    <Route path="/edit" element={<CVEdit />}/>
                </Route>
            </Routes>
        </>
    );
};
