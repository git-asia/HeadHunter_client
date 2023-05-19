import { AiFillStar } from "react-icons/ai";

import "./ReservedUserDataFragment.scss";

interface Props {
  header: string;
  value: string;
  showStars?: boolean;
}

export const ReservedUserDataFragment = ({ header, value, showStars = false }: Props) => {

  const [valueStart, restOfValue] = value.split("/");
  return (
    <div className="user-data-fragment__container">
      <h4 className="user-data-fragment__header">{header}</h4>
      <div>
        <h4 className="user-data-fragment__value">
          {value.includes("/") ? (
            <>
              {valueStart}
              <span className="user-data-fragment__value--dark">/{restOfValue}</span>
            </>
          ) : (
            value
          )}
        </h4>
        {showStars && value.includes("/") && (
          <div className="user-data-fragment__stars">
            {Array.from({ length: Number(restOfValue) }, (_, i) => (
              <AiFillStar
                size={20}
                className={`user-data-fragment__star--${i < Number(valueStart) ? "red" : "gray"}`}
                key={i}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
