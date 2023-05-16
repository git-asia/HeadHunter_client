import React, { useEffect, useState } from "react";
import { NavbarStudents } from "../../components/NavbarStudents/NavbarStudents";
import { UserData } from "../../components/UserData/UserData";
import {Pagination} from "../../components/Pagination/Pagination";
import { Header } from "../../components/Header/Header";
import {SearchFilterBar} from "../../components/SearchFilterBar/SearchFilterBar";

import "./ListView.scss";
import "../../index.scss"

interface User {
  id?: string;
  name: string;
  userData: {
    header: string;
    value: string;
  }[];
}
export const ListView = () => {
  useEffect(() => {
    // Change apiData to get users from backend
    const apiData = [
      {
        name: "Paweł S.",
        userData: [
          {
            header: "Ocena przejścia kursu",
            value: "5/5",
          },
          {
            header: "Ocena aktywności i zaangażowania na kursie",
            value: "3/5",
          },
          {
            header: "Ocena kodu w projekcie własnym",
            value: "4/5",
          },
          {
            header: "Preferowane miejsce pracy",
            value: "5/5",
          },
          {
            header: "Docelowe miasto, gdzie chce pracować kandydat",
            value: "Biuro",
          },
          {
            header: "Docelowe miasto, gdzie chce pracować kandydat",
            value: "Warszawa",
          },
          {
            header: "Oczekiwany typ kontraktu",
            value: "Umowa o pracę",
          },
          {
            header: "Oczekiwane wynagrodzenie miesięczne netto",
            value: "8000 zł",
          },
          {
            header: "Zgoda na odbycie bezpłatnych praktyk/stażu na początek",
            value: "TAK",
          },
          {
            header: "Komercyjne doświadczenie w programowaniu",
            value: "6 miesięcy",
          },
        ],
      },
      {
        name: "Marius L.",
        userData: [
          {
            header: "Ocena przejścia kursu",
            value: "5/5",
          },
          {
            header: "Ocena aktywności i zaangażowania na kursie",
            value: "3/5",
          },
          {
            header: "Ocena kodu w projekcie własnym",
            value: "4/5",
          },
          {
            header: "Preferowane miejsce pracy",
            value: "5/5",
          },
          {
            header: "Docelowe miasto, gdzie chce pracować kandydat",
            value: "Biuro",
          },
          {
            header: "Docelowe miasto, gdzie chce pracować kandydat",
            value: "Warszawa",
          },
          {
            header: "Oczekiwany typ kontraktu",
            value: "Umowa o pracę",
          },
          {
            header: "Oczekiwane wynagrodzenie miesięczne netto",
            value: "8000 zł",
          },
          {
            header: "Zgoda na odbycie bezpłatnych praktyk/stażu na początek",
            value: "TAK",
          },
          {
            header: "Komercyjne doświadczenie w programowaniu",
            value: "6 miesięcy",
          },
        ],
      },
    ];
    setUsers(apiData);
  }, []);
  const [users, setUsers] = useState<User[]>([]);

    return (
        <>
            <Header/>
            <div className="page-wrapper">
                <div className="main-wrapper">
                    <NavbarStudents/>
                    <SearchFilterBar/>
                    <div className="list-wrapper">
                      {users.map((user, i) => {
                        return <UserData name={user.name} FragmentsValues={user.userData} key={i} />;
                      })}
                    </div>
                </div>
                <Pagination/>
            </div>
        </>
    );
};

