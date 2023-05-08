import React, { useEffect, useState } from "react";
import { NavbarStudents } from "../../components/NavbarStudents/NavbarStudents";
import { UserData } from "../../components/UserData/UserData";
import {Pagination} from "../../components/Pagination/Pagination";
import { Header } from "../../components/Header/Header";
import {SearchFilterBar} from "../../components/SearchFilterBar/SearchFilterBar";

import "./ListView.scss";
import "../../index.scss"


const names = [
    {
        name:'Jacek',
        value: '5',
        header: 'ocena', 
    },
    {
        name:'Monika',
        value: '5',
        header: 'ocena'
    },
    {
        name:'Kasia',
        value: '5',
        header: 'ocena'
    },
    {
        name:'Wojtek',
        value: '3',
        header: 'ocena'
    }
]


export const ListView = () => {
    const [data, setData] = useState([]);
    const [FragmentsValues, setFragmentValues] = useState<any>([
        {
            value: '3',
            header: 'ocena',
        },
        {
            value: '1',
            header: 'oc22ena',
        }
    ]);


    useEffect(()=>{
         getData();
    },[])

    

    const getData = async() => {
        const res = await fetch('http://localhost:3001/student/all?page=0&perPage=3', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }});
            const ingo = await res.json();
    setData(ingo)
    return res
}

    return (
        <>
            <Header/>
            <div className="page-wrapper">
                <div className="list-wrapper">
                    <NavbarStudents/>
                    <SearchFilterBar/>
                    <div className="list-wrapper">{data.map((data, id) => { 
            return <UserData  key={id} name={`${data['firstName']} ${(data['lastName'])}.`} FragmentsValues={[]} />;
          })} </div>
                </div>
                <Pagination/>
            </div>
        </>
    );
};

