import "./UserDataFragment.styles.scss";
interface Props {
  header: string;
  value: string;
}
export const UserDataFragment = ({ header, value }: Props) => {
  const [valueStart, restOfValue] = value.split("/");
  return (
    <div className="container">
      <h4 className="header">{header}</h4>
      <h4 className="value">
        {value.includes("/") ? (
          <>
            {valueStart}
            <span className="value__dark">/{restOfValue}</span>
          </>
        ) : (
          value
        )}
      </h4>
    </div>
  );
};
