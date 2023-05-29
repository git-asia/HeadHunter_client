import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Container, Grid, IconButton, InputAdornment, TextField } from '@mui/material';

import logo from '../../assets/images/logo.png';
import { API_URL } from '../../config/apiUrl';

import './Login.scss';
import '../../index.scss'

interface LoginProps {
    setLoggedIn: (loggedIn: boolean) => void;
}

// interface LoginParams {
//     email: string;
//     password: string;
// }

export const Login: React.FC<LoginProps> = ({ setLoggedIn }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [inputTextEmail, setInputTextEmail] = useState(false);
    const [inputTextPassword, setInputTextPassword] = useState(false);

    const login = async () => {
        try {
            const response = await fetch(`${API_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (response.ok) {
                setLoggedIn(true);
                //localStorage.setItem('token', data.user.token);
                localStorage.setItem('userid',data.id);
                if (data.state === 1) {
                    localStorage.setItem('megakname','Administrator');
                    navigate('/admin');
                } else if (data.state === 2) {
                    const resName = await fetch(`${API_URL}/hr/name/${data.id}`);
                    const fullName = await resName.json();
                    localStorage.setItem('megakname', fullName);
                    console.log(fullName);
                    navigate('/list');
                } else {
                    const resName = await fetch(`${API_URL}/student/name/${data.id}`);
                    const { firstName, lastName, githubUsername } = await resName.json();
                    localStorage.setItem('megakname', firstName+' '+lastName);
                    localStorage.setItem('gitname', githubUsername);
                    navigate('/edit');
                }
            } else {
                setError(data.message);
                console.log(error);
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred during login.');
        }
    };

    // const handeSubmit = async (e: React.MouseEvent) => {
    //     e.preventDefault();
    //
    //     const user = await login();
    // };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setInputTextEmail(/^\S+@\S+\.\S+$/.test(event.target.value));
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        setInputTextPassword(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(event.target.value));

    };
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="page-background">
            <Container className="login-container">
                <Grid container spacing={3}>
                    <Grid item xs={12} className="email-box">
                        <img src={logo} alt="Logo" className="logo" />
                        <p className="infoAboutValidation"
                            style={{ display: inputTextEmail ? 'none' : '' }}
                        >To nie jest prawidłowy e-mail</p>
                        <TextField
                            className="login-email"
                            id="login-email"
                            type="email"
                            placeholder="E-mail"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <p className="infoAboutValidation"
                            style={{ display: inputTextPassword ? 'none' : '' }}
                        >Hasło musi mieć co najmniej 8 znaków, składać się z dużych i małych liter, cyfr i znaków specjalnych</p>
                        <TextField
                            className="login-pass"
                            id="login-pass"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Hasło"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={handlePasswordChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            aria-label="toggle password visibility"
                                            onClick={handlePasswordVisibility}
                                            className="login-pass-visibility-icon"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Button className="forgot-password-link" color="primary">
                            Zapomniałeś hasła?
                        </Button>
                    </Grid>
                    <Grid
                        container
                        className="second-line"
                        direction={'row'}
                        justifyContent={'center'}
                        alignItems={'baseline'}
                    >
                        <Grid item>
                            <Button className="login-btn"
                                onClick={login}>
                                Zaloguj się
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};