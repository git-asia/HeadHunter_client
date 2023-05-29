import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Grid } from '@mui/material';

import logo from '../../assets/images/logo.png';

import '../../index.scss';
import './Admin.scss';

export const Admin: React.FC = () => {
    const navigate = useNavigate();

    const addHr = () => {
        navigate('/addhr');
    }

    const addStudents = () => {
        navigate('/send-student');
    }

    const changePass = () => {
        navigate('/change-data-user');
    }

    return (
        <div className="page-background">
            <Container className="admin-container">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <img src={logo} alt="Logo" className="logo" />
                        <Button className="admin-btn" onClick={addHr}>
                            Dodaj HR
                        </Button>
                        <Button className="admin-btn" onClick={addStudents}>
                            Dodaj kursantów
                        </Button>
                        <Button className="admin-btn" onClick={changePass}>
                            Zmień hasło
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
