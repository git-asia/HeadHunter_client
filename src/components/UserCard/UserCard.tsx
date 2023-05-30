import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { GiPhone } from 'react-icons/gi';
import { GrMail } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import logo from '../../assets/images/avatar-holder.png';
import { API_URL } from '../../config/apiUrl';
import { Button } from '../Button/Button';

import './UserCard.scss';

interface Props {
  id: string;
  name: string;
  github: string;
  phoneNumber: string;
  email: string;
  aboutMe: string;
}

export const UserCard = ({ id, name, github, phoneNumber, email, aboutMe }: Props) => {
    const [spinner, setSpinner] = useState(false);
    const navigate = useNavigate();
    const hrId = localStorage.getItem('userid');
    const slicedPhoneNumber = [];
    if (phoneNumber !== null) {
        for (let i = 0; i < phoneNumber.length; i += 3) {
            slicedPhoneNumber.push(phoneNumber.substring(i, i + 3));
        }
    }

    const changeStatus = async (studentId:string, action:string) =>{
        setSpinner(true);
        try {
            const res = await fetch(`${API_URL}/student/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action,
                    studentId,
                    hrId
                }),
            });
            const data = await res.json();
            console.log(data.message);
            navigate('../list/reserved');
        } finally {
            setSpinner(false);
            // zmiana state
        }
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
                <p className="Usercard__info__value">{slicedPhoneNumber.join(' ')}</p>
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
                <CircularProgress
                    style={{ display: spinner ? '' : 'none' }}/>
                <Button value="Brak zainteresowania"   onClick={()=>changeStatus(id,'disinterest')}/>
                <Button value="Zatrudniony"  onClick={()=>changeStatus(id,'employ')} />
            </div>
        </div>
    );
};
