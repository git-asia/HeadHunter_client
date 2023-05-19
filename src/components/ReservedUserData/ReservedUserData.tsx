import { IoIosArrowDown } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "../../config/apiUrl";
import { FilterContext } from "../../contexts/filter.context";
import { ContractType, Internship, TypeWork } from "../../types";
import { ReservedStudent } from "../../types";
import { PaginationContext } from "../../contexts/pagination.context";
import { UserDataFragment } from "../UserData/UserDataFragment/UserDataFragment";
import logo from "../../assets/images/avatar-holder.png";

import "./ReservedUserData.scss";

interface Props {
  id: string;
  name: string;
  open: boolean;
  githubUsername: string;
  reservationExpiresOn: Date | null;
  FragmentsValues: {
    header: string;
    value: string;
  }[];
}

type StudentResults = { allRecords: number; data: ReservedStudent[] };

export const ReservedUserData = () => {
  const { filterCon } = useContext(FilterContext);
  const [studentData, setStudentData] = useState<Props[]>([]);
  const { pagination, setPagination } = useContext(PaginationContext);

  // const changeStatus= async (studentId:string, index:number) =>{
  //
  //   try {
  //     const res = await fetch(`${API_URL}/student/status`, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         action: 'reserve',
  //         studentId,
  //       }),
  //     });
  //     const data = await res.json();
  //     console.log(data.message);
  //   } finally {
  //
  //
  //     // zmiana state
  //   }
  // }

  const changeStatus = async (studentId: string, index: number, action: string) => {
    const hrId = "46f84261-df9d-11ed-a2b7-24fd5235b3db"; // @TODO hrId pobrane z ciasteczka lub tokenu?
    try {
      const res = await fetch(`${API_URL}/student/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action,
          studentId,
          hrId,
        }),
      });
      const data = await res.json();
      console.log(data.message);
    } finally {
      setStudentData((studentData) => {
        return studentData.filter((_, i) => i !== index);
      });
    }
  };

  const isOpen = (index: number) => {
    setStudentData((studentData) => {
      return studentData.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            open: !item.open,
          };
        } else {
          return item;
        }
      });
    });
  };
  const hrId = "46f84261-df9d-11ed-a2b7-24fd5235b3db";

  useEffect(() => {
    const min = filterCon.expectedSalary.min === "" ? "0" : filterCon.expectedSalary.min;
    const max = filterCon.expectedSalary.max === "" ? "999999" : filterCon.expectedSalary.max;

    let param = `${filterCon.expectedTypeWork.remoteWork}/${filterCon.expectedTypeWork.inOffice}/`;
    param += `${filterCon.expectedContractType.employmentContract}/${filterCon.expectedContractType.mandateContract}/${filterCon.expectedContractType.b2b}/${filterCon.expectedContractType.workContract}/`;
    param += `${min}/${max}/`;
    param += `${filterCon.courseCompletion}/${filterCon.courseEngagement}/${filterCon.projectDegree}/${filterCon.teamProjectDegree}/`;
    param += `${filterCon.canTakeApprenticeship}/${filterCon.monthsOfCommercialExp}/`;
    param += `${pagination.page}/${pagination.rowsPerPage}/`;
    param += `${hrId}`;

    (async () => {
      const res = await fetch(`${API_URL}/student/reserved/${param}`, {
        method: "GET",
      });
      const data: StudentResults = await res.json();
      const student = data.data.map((item) => ({
        FragmentsValues: [
          { header: "Ocena przejścia kursu", value: item.courseCompletion + "/5" },
          { header: "Ocena aktywności i zaangażowania na kursie", value: item.courseEngagement + "/5" },
          { header: "Ocena kodu w projekcie własnym", value: item.projectDegree + "/5" },
          { header: "Ocena pracy w zespole w Scrum", value: item.teamProjectDegree + "/5" },
          { header: "Preferowane miejsce pracy", value: TypeWork[item.expectedTypeWork] },
          { header: "Docelowe miasto, gdzie chce pracować kandydat", value: item.targetWorkCity },
          { header: "Oczekiwany typ kontraktu", value: ContractType[item.expectedContractType] },
          { header: "Oczekiwane wynagrodzenie miesięczne netto", value: item.expectedSalary + " zł" },
          {
            header: "Zgoda na odbycie bezpłatnych praktyk/stażu na początek",
            value: Internship[item.canTakeApprenticeship],
          },
          { header: "Komercyjne doświadczenie w programowaniu", value: item.monthsOfCommercialExp.toString() },
        ],
        id: item.studentId,
        name: item.firstName + " " + item.lastName,
        githubUsername: item.githubUsername,
        reservationExpiresOn: item.reservationExpiresOn,
        open: false,
      })) as Props[];
      setStudentData(student);
      setPagination({
        ...pagination,
        allRecords: Number(data.allRecords),
      });
      console.log(data);
    })();
  }, [pagination.page, filterCon]);

  return (
    <>
      {studentData &&
        studentData.map((item, index) => (
          <div className="user-data__container" key={index}>
            <div className="user-data__nav">
              <span>{item.reservationExpiresOn}</span>
              <img src={item.githubUsername ? `https://github.com/${item.githubUsername}.png` : logo} alt="user logo" />
              <h4>{item.name}</h4>
              <div className="input-container">
                <input
                  type="button"
                  value="Pokaż CV"
                  //onClick={}  //TODO odesłanie na CV danego uzytkownika item.studentId
                />
                <input
                  type="button"
                  value="Brak zainteresowania"
                  onClick={() => changeStatus(item.id, index, "disinterest")}
                />
                <input type="button" value="Zatrudniony" onClick={() => changeStatus(item.id, index, "employ")} />
                <IoIosArrowDown
                  size={30}
                  fill="#666666"
                  className={`${item.open && "user-data__nav__svg--rotate"}`}
                  onClick={() => {
                    isOpen(index);
                  }}
                />
              </div>
            </div>
            {item.open && (
              <div className="user-data__fragments">
                {item.FragmentsValues.map(({ header, value }, id) => {
                  return <UserDataFragment header={header} value={value} key={id} />;
                })}
              </div>
            )}
            <div className="test"></div>
          </div>
        ))}
    </>
  );
};
