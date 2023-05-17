import { UserDataFragment } from "./UserDataFragment/UserDataFragment";
import { IoIosArrowDown } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { API_URL } from "../../config/apiUrl";
import { FilterContext } from "../../contexts/filter.context";
import { PageContext } from "../../contexts/page.context";
import { RowsPerPage } from "../../contexts/rowsPerPage.context";
//import {ContractType, Internship, TypeWork} from "../../../HeadHunter_server/types/student/student.enum";

import "./UserData.scss";

interface Props {
  id: string;
  name: string;
  open: boolean;
  FragmentsValues: {
    header: string;
    value: string;
  }[];
}
interface AvailableStudent {
  studentId: string;
  firstName: string;
  lastName: string;
  targetWorkCity: string;
  expectedSalary: number;
  courseCompletion: number;
  courseEngagement: number;
  teamProjectDegree: number;
  projectDegree: number;
  expectedTypeWork: number;
  expectedContractType: number;
  canTakeApprenticeship: number;
  monthsOfCommercialExp: number;
}

export const UserData = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { filterCon } = useContext(FilterContext);
  const { page } = useContext(PageContext);
  const { rowsPerPage } = useContext(RowsPerPage);
  const [studentData, setStudentData] = useState<Props[]>([]);

  const changeStatus = async (studentId: string, index: number) => {
    try {
      const res = await fetch(`${API_URL}/student/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "reserve",
          studentId,
        }),
      });
      const data = await res.json();
      console.log(data.message);
    } finally {
      setStudentData((studentData) => {
        return studentData.filter((_, i) => i !== index);
      });
      // zmiana state
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

  useEffect(() => {
    const min = filterCon.expectedSalary.min === "" ? "0" : filterCon.expectedSalary.min;
    const max = filterCon.expectedSalary.max === "" ? "999999" : filterCon.expectedSalary.max;

    let param = `${filterCon.expectedTypeWork.remoteWork}/${filterCon.expectedTypeWork.inOffice}/`;
    param += `${filterCon.expectedContractType.employmentContract}/${filterCon.expectedContractType.mandateContract}/${filterCon.expectedContractType.b2b}/${filterCon.expectedContractType.workContract}/`;
    param += `${min}/${max}/`;
    param += `${filterCon.courseCompletion}/${filterCon.courseEngagement}/${filterCon.projectDegree}/${filterCon.teamProjectDegree}/`;
    param += `${filterCon.canTakeApprenticeship}/${filterCon.monthsOfCommercialExp}/`;
    param += `${page}/${rowsPerPage}/`;

    (async () => {
      const res = await fetch(`${API_URL}/student/all/${param}`, {
        //@TODO nie działa API_URL
        method: "GET",
      });
      const data: AvailableStudent[] = await res.json();
      console.log(data);
      const student = data.map((item) => ({
        FragmentsValues: [
          { header: "Ocena przejścia kursu", value: item.courseCompletion + "/5" },
          { header: "Ocena aktywności i zaangażowania na kursie", value: item.courseEngagement + "/5" },
          { header: "Ocena kodu w projekcie własnym", value: item.projectDegree + "/5" },
          { header: "Ocena pracy w zespole w Scrum", value: item.teamProjectDegree + "/5" },
          { header: "Preferowane miejsce pracy", value: [item.expectedTypeWork] },
          { header: "Docelowe miasto, gdzie chce pracować kandydat", value: item.targetWorkCity },
          { header: "Oczekiwany typ kontraktu", value: [item.expectedContractType] },
          { header: "Oczekiwane wynagrodzenie miesięczne netto", value: item.expectedSalary + " zł" },
          {
            header: "Zgoda na odbycie bezpłatnych praktyk/stażu na początek",
            value: [item.canTakeApprenticeship],
          },
          { header: "Komercyjne doświadczenie w programowaniu", value: item.monthsOfCommercialExp.toString() },
        ],
        id: item.studentId,
        name: item.firstName + " " + item.lastName.charAt(0) + ".",
        open: false,
      })) as Props[];
      setStudentData(student);
    })();
  }, [page, filterCon]);

  return (
    <>
      {studentData &&
        studentData.map((item, index) => (
          <div className="user-data__container" key={index}>
            <div className="user-data__nav">
              <h4>{item.name}</h4>
              <div className="input-container">
                <input type="button" value="Zarezerwuj rozmowę" onClick={() => changeStatus(item.id, index)} />
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
          </div>
        ))}
    </>
  );
};
