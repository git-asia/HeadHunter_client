import { UserDataFragment } from "./UserDataFragment/UserDataFragment";
import { IoIosArrowDown } from "react-icons/io";
import {useContext, useEffect, useState} from "react";
import "./UserData.scss";
import {API_URL} from "../../config/apiUrl";
import {FilterContext} from "../../contexts/filter.context";
import {PageContext} from "../../contexts/page.context";
import {RowsPerPage} from "../../contexts/rowsPerPage.context";

interface Props {
  id : string;
  name: string;
  FragmentsValues: {
    value: string;
    header: string;
  }[];
}

export const UserData = ({ id, FragmentsValues, name }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {filterCon} = useContext(FilterContext)
  const {page} = useContext(PageContext)
  const {rowsPerPage} = useContext(RowsPerPage)



  const changeStatus= async (studentId:string) =>{

    try {
      const res = await fetch(`${API_URL}/students/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'reserve',
          studentId,
        }),
      });
      const data = await res.json();
      console.log(data.message);
    } finally {
      // zmiana state
    }
  }

  let param= `${filterCon.expectedTypeWork.remoteWork}/${filterCon.expectedTypeWork.inOffice}/`;
  param += `${filterCon.expectedContractType.employmentContract}/${filterCon.expectedContractType.mandateContract}/${filterCon.expectedContractType.b2b}/${filterCon.expectedContractType.workContract}/`;
  param += `${filterCon.expectedSalary.min}/${filterCon.expectedSalary.max}/`;
  param += `${filterCon.courseCompletion}/${filterCon.courseEngagement}/${filterCon.projectDegree}/${filterCon.teamProjectDegree}/`;
  param += `${filterCon.canTakeApprenticeship}/${filterCon.monthsOfCommercialExp}/`;
  param += `${page}/${rowsPerPage}/`;
  console.log(param);
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/students/all/${param}`, {     //@TODO nie działa API_URL
        method: 'GET'
      });
      const data = await res.json();

    })();
  }, [page]);

  return (
    <div className="user-data__container">
      <div className="user-data__nav">
        <h4>{name}</h4>
        <div className="input-container">
          <input
            type="button"
            value="Zarezerwuj rozmowę"
            onClick={()=>changeStatus(id)}
          />
          <IoIosArrowDown
            size={30}
            fill="#666666"
            className={`${isOpen && "user-data__nav__svg--rotate"}`}
            onClick={() => {
              setIsOpen((prevState) => !prevState);
            }}
          />
        </div>
      </div>
      {isOpen && (
        <div className="user-data__fragments">
          {FragmentsValues.map(({ header, value }, id) => {
            return <UserDataFragment header={header} value={value} key={id} />;
          })}
        </div>
      )}
    </div>
  );
};
