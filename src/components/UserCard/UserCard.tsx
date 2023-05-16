import logo from "../../assets/images/avatar-holder.png";
import { BsGithub } from "react-icons/bs";
import { GiPhone } from "react-icons/gi";
import { GrMail } from "react-icons/gr";
import { Button } from "../Button/Button";
import "./UserCard.scss";

interface Props {
  name: string;
  github: string;
  phoneNumber: string;
  email: string;
  aboutMe: string;
}

export const UserCard = ({ name, github, phoneNumber, email, aboutMe }: Props) => {
  const slicedPhoneNumber = [];
  for (let i = 0; i < phoneNumber.length; i += 3) {
    slicedPhoneNumber.push(phoneNumber.substring(i, i + 3));
  }
  return (
    <div className="Usercard__container">
      <div className="Usercard__avatar">
        <img src={github? `https://github.com/${github}.png`:logo} alt="user logo" />
      </div>
      <h4 className="Usercard__name">{name}</h4>
      <div className="Usercard__github">
        <BsGithub size={22} className="Usercard__github__svg" />
        <a href={github} className="Usercard__github__link">
          {github}
        </a>
      </div>
      <div className="Usercard__info">
        <GiPhone size={17} className="Usercard__info__svg Usercard__info__svg--rotate" />
        <p className="Usercard__info__value">{slicedPhoneNumber.join(" ")}</p>
      </div>
      <div className="Usercard__info">
        <GrMail size={17} className="Usercard__info__svg" />
        <p className="Usercard__info__value">{email}</p>
      </div>
      <div className="Usercard__aboutme">
        <p className="Usercard__aboutme__header">O mnie</p>
        <p className="Usercard__aboutme__value">{aboutMe}</p>
      </div>
      <div className="Usercard__buttons">
        <Button value="Brak zainteresowania" isClickable={false} />
        <Button value="Zatrudniony" isClickable={false} />
      </div>
    </div>
  );
};
