import { UserDataFragment } from "./UserDataFragment/UserDataFragment";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import "./UserData.scss";
import {API_URL} from "../../config/apiUrl";

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




  const changeStatus= async (studentId:string) =>{

    try {
      const res = await fetch(`${API_URL}/students/status`, {
        method: 'POST',
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
