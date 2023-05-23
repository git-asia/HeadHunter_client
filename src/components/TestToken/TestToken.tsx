import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { API_URL } from '../../config/apiUrl';

import '../../index.scss';
import './TestToken.scss';

export const TestToken = () => {
    const navigate = useNavigate();
    const [textInfo, setTextInfo] = useState(<div>
        <p>Sprawdzamy Twój link.</p>
        <p>Za chwilę zostaniesz przekierowany na stronę zmiany hasła.</p>
    </div>)
    const routeParams = useParams();
    const { token } = routeParams;
    //const token = '57ccdfc6-8578-4931-bd31-34a1ddd6c575';

    useEffect( () => {
        const fetchData = async () => {
            const res = await fetch(`${API_URL}/user/token/${token}`);
            const data = (await res.json());
            if (data===null){
                setTextInfo(<div>
                    <h1>Błąd!</h1>
                    <p>Minął termin ważności linku.</p>
                    <p>Skontaktuj się z administratorem.</p>
                </div>)
            } else if (data.length===36){
                // console.log(data);
                navigate('/change-data-user');
            } else {
                setTextInfo (<div>
                    <h1>Błąd!</h1>
                    <p>Nieprawidłowy link. Skontaktuj się z administratorem.</p>
                </div>)
            }
        }
        fetchData().catch (console.error);
    }, []);

    return <div className="link-with-token-container">
        <img src={logo} alt="Logo" className="logo" />
        {textInfo}
    </div>
}