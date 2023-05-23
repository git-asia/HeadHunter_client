import React, {SyntheticEvent} from 'react';
import logo from "../../assets/images/logo.png";

import "../../index.scss";
import "./SendStudentsData.scss";
import {API_URL} from "../../config/apiUrl";

export const SendStudentsData = () => {
    const sendForm = async (e: SyntheticEvent) => {
        //e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        try {
            const response = await fetch(`${API_URL}/student/newstudents`, {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                console.log('jest OK');
            } else {
                console.log('coś nie poszło');
            }
        } catch (error) {
            console.log('coś nie poszło');
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
                    <button
                        className="send-students-btn"
                        type="submit"
                    >
                        Prześlij plik</button>
                </div>
            </form>
        </div>)
}