import "./UserCVFragment.scss";

interface Props {
  header: string;
  children?: JSX.Element | JSX.Element[];
}
export const UserCVFragment = ({ header, children }: Props) => {
  return (
    <div className="UserCV__fragment">
      <div className="UserCV__fragment__heading">
        <h3>{header}</h3>
      </div>
      <div className="UserCV__fragment__value">{children}</div>
    </div>
  );
};
