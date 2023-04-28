import { UserDataFragment } from "./UserDataFragment/UserDataFragment";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import "./UserData.scss";

interface Props {
  name: string;
  FragmentsValues: {
    value: string;
    header: string;
  }[];
}

export const UserData = ({ FragmentsValues, name }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="user-data__container">
      <div className="user-data__nav">
        <h4>{name}</h4>
        <div className="input-container">
          <input
            type="button"
            value="Zarezerwuj rozmowę"
            onClick={() => {
              // To be implemented
            }}
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
