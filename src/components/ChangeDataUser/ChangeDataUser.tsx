import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, CircularProgress, Container, Grid, TextField } from '@mui/material';

import logo from '../../assets/images/logo.png';
import { API_URL } from '../../config/apiUrl';

import '../../index.scss';
import './ChangeDataUser.scss';

export const ChangeDataUser: React.FC = () => {
    const navigate = useNavigate();
    const testId = localStorage.getItem('userid');

    const [formEmail, setFormEmail] = useState('');

    const [formPass, setFormPass] = useState({
        pass: '',
        pass2: ''
    });

    const [validMail, setValidMail] = useState(true);

    const [validPass, setValidPass] = useState(true);

    const [validPass2, setValidPass2] = useState(true);
    const [spinnerMail, setSpinnerMail] = useState(false);
    const [spinnerPass, setSpinnerPass] = useState(false);
    const [spinnerJob, setSpinnerJob] = useState(false);

    const sendMail = async () => {
        setSpinnerMail(true);
        if(formEmail.includes('@')){
            setValidMail(true);
            const toSendMail = {
                id: testId,
                email: formEmail
            }
            try {
                const res = await fetch(`${API_URL}/user/changemail`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(toSendMail),
                });
                const data = await res.json();
                if (data) {
                    setFormEmail('');
                    console.log('Dane zostały zapisane.');
                    navigate('/edit');
                }
            } catch (e) {
                console.log('Coś poszło nie tak. Spróbuj później')
            } finally {
                setSpinnerMail(false);
            }

        } else {
            setValidMail(false);
        }
    }

    const sendPass = async () => {
        setSpinnerPass(true);
        const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (!passwordRegex.test(formPass.pass)){
            setValidPass(false);
        } else if (formPass.pass!==formPass.pass2){
            setValidPass(true);
            setValidPass2(false);
        } else {
            setValidPass2(true);
            const toSendPass = {
                id: testId,
                pass: formPass.pass,
                pass2: formPass.pass2
            }
            try {
                const res = await fetch(`${API_URL}/user/newpass`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(toSendPass),
                });
                const data = await res.json();
                if (data) {
                    setFormPass({
                        pass: '',
                        pass2: ''
                    });
                    console.log('Dane zostały zapisane.')
                }
            } catch (e) {
                console.log('Coś poszło nie tak. Spróbuj później')
            } finally {
                setSpinnerPass(false);
            }
        }
    }

    const haveJob = async () => {
        setSpinnerJob(true);
        const toSendStatus = {
            studentId: testId,
            userStatus: 3
        }
        try {
            const res = await fetch('http://localhost:3001/user/my-status', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(toSendStatus),
            });
            const data = await res.json();
            if (data) {
                console.log('Dane zostały zapisane.')
            }
        } catch (e) {
            console.log('Coś poszło nie tak. Spróbuj później')
        } finally {
            setSpinnerPass(false);
        }
    }

    return (
        <div className="page-background">
            <Container className="change-user-data-container">
                <Grid container spacing={3}>
                    <Grid item xs={12} className="email-box">
                        <img src={logo} alt="Logo" className="logo" />
                        <p className="info">Zmień adres e-mail</p>
                        <TextField
                            type="email"
                            placeholder="E-mail"
                            value={formEmail}
                            onChange={e => setFormEmail(e.target.value)}
                            variant="outlined"
                            fullWidth
                        />
                        <p className="info"
                            style={{ display: validMail ? 'none' : '' }}>To nie jest prawidłowy adres e-mail</p>
                        <CircularProgress
                            style={{ display: spinnerMail ? '' : 'none' }}/>
                        <Button className="change-user-data-btn"
                            onClick={sendMail}>
                            Zapisz e-mail
                        </Button>
                    </Grid>
                    <Grid item xs={12} className="pass-box">
                        <p className="info">Zmień hasło</p>
                        <TextField
                            type="password"
                            placeholder="Podaj hasło"
                            value={formPass.pass}
                            onChange={e => setFormPass({ ...formPass, pass: e.target.value })}
                            variant="outlined"
                            fullWidth
                        />
                        <p className="info"
                            style={{ display: validPass ? 'none' : '' }}>
                            Hasło musi zawierać min. 8 znaków: cyfrę, małą i dużą literę i znak specjalny.</p>
                        <TextField
                            type="password"
                            placeholder="Powtórz hasło"
                            value={formPass.pass2}
                            onChange={e => setFormPass({ ...formPass, pass2: e.target.value })}
                            variant="outlined"
                            fullWidth
                        />
                        <p className="info"
                            style={{ display: validPass2 ? 'none' : '' }}>Hasła się różnią</p>
                        <CircularProgress
                            style={{ display: spinnerPass ? '' : 'none' }}/>
                        <Button className="change-user-data-btn"
                            onClick={sendPass}>
                            Zapisz hasło
                        </Button>
                    </Grid>
                    <Grid item xs={12} className="work-box">
                        <p className="info">Naciśnięcie poniższego przycisku oznacza zakończenie korzystania z portalu. Powodzenia w nowej pracy!</p>
                        <CircularProgress
                            style={{ display: spinnerJob ? '' : 'none' }}/>
                        <Button className="change-user-data-btn"
                            onClick={haveJob}>
                            Znalazłem pracę!
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};