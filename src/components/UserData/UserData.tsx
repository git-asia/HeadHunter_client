import { UserDataFragment } from "./UserDataFragment/UserDataFragment";
import { IoIosArrowDown } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { API_URL } from "../../config/apiUrl";
import { FilterContext } from "../../contexts/filter.context";
//import {ContractType, Internship, TypeWork} from "../../../../HeadHunter_server/types/student/student.enum";
import { PaginationContext } from "../../contexts/pagination.context";

import "./UserData.scss";

enum TypeWork {
  "Praca w biurze" = 1,
  "Praca zdalna" = 2,
}

enum ContractType {
  "Umowa o pracę" = 1,
  "B2B" = 2,
  "Umowa zlecenie" = 3,
  "Umowa o dzieło" = 4,
}

enum Internship {
  "Nie",
  "Tak",
}

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
type StudentResults = { allRecords: number; data: AvailableStudent[] };

export const UserData = () => {
  const { filterCon } = useContext(FilterContext);
  const [studentData, setStudentData] = useState<Props[]>([]);
  const { pagination, setPagination } = useContext(PaginationContext);

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
    param += `${pagination.page}/${pagination.rowsPerPage}/`;

    (async () => {
      const res = await fetch(`${API_URL}/student/all/${param}`, {
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
        name: item.firstName + " " + item.lastName.charAt(0) + ".",
        open: false,
      })) as Props[];
      setStudentData(student);

      setPagination({
        ...pagination,
        allRecords: Number(data.allRecords),
      });
    })();
  }, [pagination.page, filterCon]);

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
