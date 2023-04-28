import React from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import '../App.scss';
import './Login.scss';

export const Login: React.FC = () => {
    return (
        <div className="page-background">
            <Container maxWidth="md" className="login-container">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className="logo"/>
                        <TextField
                            className="login-email"
                            type="email"
                            label="E-mail"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                        <Grid item xs={12}>
                        <TextField
                            className="login-password"
                            type="password"
                            label="Hasło"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item container xs={12} justifyContent="flex-end">
                        <Button className="forgot-password-link" color="primary">
                            Zapomniałeś hasła?
                        </Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>Nie masz konta?</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button className="register-link" color="primary">
                            Zarejestruj się
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className="link-login-button" variant="contained">
                            Zaloguj się
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};