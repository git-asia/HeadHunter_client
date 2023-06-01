import React, { SyntheticEvent, useState } from 'react';
import { CircularProgress } from '@mui/material';

import logo from '../../assets/images/logo.png';
import { API_URL } from '../../config/apiUrl';

import '../../index.scss';
import './SendStudentsData.scss';

export const SendStudentsData = () => {
    const [spinner, setSpinner] = useState(false);
    const sendForm = async (e: SyntheticEvent) => {
        setSpinner(true);
        //e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        try {
            const response = await fetch(`${API_URL}/student/newstudents`, {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                console.log('jest OK');
            } else {
                console.log('coś nie poszło');
            }
        } catch (error) {
            console.log('coś nie poszło');
        } finally {
            setSpinner(false);
        }
    }
    return (
        <div className="send-students-data-container">
            <img src={logo} alt="Logo" className="logo" />
            <form
                onSubmit={sendForm}
            >
                <label> <span className="info-label">Dodaj plik scv:</span>
                    <input
                        type="file"
                        name="dataFile"
                        accept=".csv"
                    />
                </label>
                <div>
                    <CircularProgress
                        style={{ display: spinner ? '' : 'none' }}/>
                    <button
                        className="send-students-btn"
                        type="submit"
                    >
                        Prześlij plik</button>
                </div>
            </form>
        </div>)
}