import { UserDataFragment } from "../UserData/UserDataFragment/UserDataFragment";
import { UserCVFragment } from "./UserCVFragment/UserCVFragment";
import { AiOutlinePaperClip } from "react-icons/ai";
import "./UserCV.scss";
interface Props {
  grades: { header: string; value: string }[];
  expectations: { header: string; value: string }[];
  education: string;
  courses: string;
  experience: string;
  portfolio: string[];
  scramProjects: string[];
  finalProjects: string[];
}
export const UserCV = ({
  grades,
  expectations,
  education,
  courses,
  experience,
  portfolio,
  finalProjects,
  scramProjects,
}: Props) => {
  return (
    <div className="UserCV__container">
      <UserCVFragment header="Oceny">
        <div className="UserCV__fragment__container">
          {grades.map(({ header, value }) => {
            return <UserDataFragment header={header} value={value} key={header} showStars />;
          })}
        </div>
      </UserCVFragment>
      <UserCVFragment header="Oczekiwania w stosunku do zatrudnienia">
        <div className="UserCV__fragment__container">
          {expectations.map(({ header, value }) => {
            return <UserDataFragment header={header} value={value} key={header} />;
          })}
        </div>
      </UserCVFragment>
      <UserCVFragment header="Edukacja">
        <div className="UserCV__text__container">
          <p className="UserCV__text">{education}</p>
        </div>
      </UserCVFragment>
      <UserCVFragment header="Kursy">
        <div className="UserCV__text__container">
          <p className="UserCV__text">{courses}</p>
        </div>
      </UserCVFragment>
      <UserCVFragment header="Doświadczenie zawodowe">
        <div className="UserCV__text__container">
          <p className="UserCV__text">{experience}</p>
        </div>
      </UserCVFragment>
      <UserCVFragment header="Portfolio">
        <div className="UserCV__text__container">
          {portfolio.map((link) => {
            return (
              <div className="UserCV__link__container" key={link}>
                <AiOutlinePaperClip size={28} className="UserCV__link__svg" />
                <a className="UserCV__link" href={link}>
                  {link}
                </a>
              </div>
            );
          })}
        </div>
      </UserCVFragment>
      <UserCVFragment header="Projekty w zespole Scrumowym">
        <div className="UserCV__text__container">
          {scramProjects.map((link) => {
            return (
              <div className="UserCV__link__container" key={link}>
                <AiOutlinePaperClip size={28} className="UserCV__link__svg" />
                <a className="UserCV__link" href={link}>
                  {link}
                </a>
              </div>
            );
          })}
        </div>
      </UserCVFragment>
      <UserCVFragment header="Projekty na zaliczenie">
        <div className="UserCV__text__container">
          {finalProjects.map((link) => {
            return (
              <div className="UserCV__link__container" key={link}>
                <AiOutlinePaperClip size={28} className="UserCV__link__svg" />
                <a className="UserCV__link" href={link}>
                  {link}
                </a>
              </div>
            );
          })}
        </div>
      </UserCVFragment>
    </div>
  );
};
