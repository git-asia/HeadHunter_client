import "./UserDataFragment.styles.scss";
interface Props {
  header: string;
  value: string;
}
export const UserDataFragment = ({ header, value }: Props) => {
  const [valueStart, restOfValue] = value.split("/");
  return (
    <div className="user-data-fragment__container">
      <h4 className="user-data-fragment__header">{header}</h4>
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
    </div>
  );
};
