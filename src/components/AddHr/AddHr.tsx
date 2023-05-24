import React, { SyntheticEvent, useState } from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';

import logo from '../../assets/images/logo.png';
import { API_URL } from '../../config/apiUrl';

import '../../index.scss';
import './AddHr.scss';

export const AddHr: React.FC = () => {
    const emptyForm = {
        email: '',
        fullName: '',
        company: '',
        maxReservedStudents: '',
    };
    const [form, setForm] = useState(emptyForm);
    const [validForm, setValidForm] = useState({
        email: false,
        name: false,
        company: false,
        maxStudent: false
    });

    const updateForm = (key: string, value: string | number) => {
        setForm((form) => ({
            ...form,
            [key]: value,
        }));

        setValidForm({
            email: !form.email.includes('@'),
            name: form.fullName === '',
            company: form.company === '',
            maxStudent: Number(form.maxReservedStudents) < 1 || Number(form.maxReservedStudents) > 999
        });
    };

    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        setValidForm({
            email: !form.email.includes('@'),
            name: form.fullName === '',
            company: form.company === '',
            maxStudent: Number(form.maxReservedStudents) < 1 || Number(form.maxReservedStudents) > 999
        });

        if (
            form.email.includes('@') &&
      form.fullName !== '' &&
      form.company !== '' &&
      Number(form.maxReservedStudents) > 0 &&
      Number(form.maxReservedStudents) < 1000
        ) {
            try {
                const res = await fetch(
                    `${API_URL}/manage/add-hr/${form.email}/${form.fullName}/${form.company}/${form.maxReservedStudents}'`,
                );
                const data = await res.json();
                if (data.success) {
                    setForm(emptyForm);
                    console.log(data.message);
                }
            } catch (e) {
                console.log('Coś poszło nie tak. Spróbuj później.');
            }
        }
    };

    return (
        <div className="page-background">
            <Container className="add-hr-container">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <img src={logo} alt="Logo" className="logo" />
                        <Grid>
                            <p className="info-validation" style={{ display: validForm.email ? '' : 'none' }}>
                Podaj prawidłowy adres e-mail
                            </p>
                            <TextField
                                type="email"
                                placeholder="E-mail"
                                value={form.email}
                                onChange={(e) => {
                                    updateForm('email', e.target.value);
                                }}
                                required
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid>
                            <p className="info-validation" style={{ display: validForm.name ? '' : 'none' }}>
                Podaj imię i nazwisko HR
                            </p>
                            <TextField
                                type="text"
                                placeholder="Imię i nazwisko"
                                value={form.fullName}
                                onChange={(e) => {
                                    updateForm('fullName', e.target.value);
                                }}
                                required
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid>
                            <p className="info-validation" style={{ display: validForm.company ? '' : 'none' }}>
                Podaj nazwę firmy HR
                            </p>
                            <TextField
                                type="text"
                                placeholder="Firma"
                                value={form.company}
                                onChange={(e) => {
                                    updateForm('company', e.target.value);
                                }}
                                required
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid>
                            <p className="info-validation" style={{ display: validForm.maxStudent ? '' : 'none' }}>
                Podaj liczbę między 1-999
                            </p>
                            <TextField
                                type="number"
                                placeholder="Max. liczba kursantów"
                                value={form.maxReservedStudents}
                                onChange={(e) => {
                                    updateForm('maxReservedStudents', e.target.value);
                                }}
                                required
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid>
                            <Button className="add-hr-btn" onClick={sendForm}>
                Zapisz
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
