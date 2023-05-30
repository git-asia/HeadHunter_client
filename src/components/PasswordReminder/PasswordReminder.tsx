import React, { useState } from 'react';
import { Button, CircularProgress, Container, Grid, TextField } from '@mui/material';

import logo from '../../assets/images/logo.png';

import '../../index.scss';
import './PasswordReminder.scss';

export const PasswordReminder: React.FC = () => {
    const [spinner, setSpinner] = useState(false);
    return (
        <div className="page-background">
            <Container maxWidth="md" className="login-container">
                <Grid container spacing={3}>
                    <Grid item xs={12} className="email-box">
                        <img src={logo} alt="Logo" className="logo" />

                        <p className="infoAboutSendLink">Na podany adres e-mail zostanie przesłany link.</p>

                        <TextField
                            className="login-email"
                            id="login-email"
                            color="primary"
                            type="email"
                            placeholder="E-mail"
                            variant="outlined"
                            fullWidth
                        />
                        <Grid container justifyContent="center">
                            <CircularProgress
                                style={{ display: spinner ? '' : 'none' }}/>
                            <Button className="login-btn">
                                Zresetuj hasło
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};