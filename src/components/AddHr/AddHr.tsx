import React, {SyntheticEvent, useState} from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import logo from "../../assets/images/logo.png";
import "../../App.scss";
import "./AddHr.scss";

export const AddHr: React.FC = () => {
    const [form, setForm] = useState({
        email: '',
        fullName: '',
        company: '',
        maxReservedStudents: "",
    });

    const updateForm = (key: string, value: string|number) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };

    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3001/manage/add-hr/:${form.email}/:${form.fullName}/:${form.company}/:${form.maxReservedStudents}'`);
            const data = await res.json();
            if(data.success){
                console.log(data.message)
            }
        }
        catch (e) {
            console.log("Coś poszło nie tak. Spróbuj później.")
        }
    };


    return (
        <div className="page-background">
            <Container className="add-hr-container">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <img src={logo} alt="Logo" className="logo" />
                        <Grid>
                            <TextField
                                type="email"
                                placeholder="E-mail"
                                value={form.email}
                                onChange={e => updateForm('email', e.target.value)}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                type="text"
                                placeholder="Imię i nazwisko"
                                value={form.fullName}
                                onChange={e => updateForm('fullName', e.target.value)}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                type="text"
                                placeholder="Firma"
                                value={form.company}
                                onChange={e => updateForm('company', e.target.value)}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                type="number"
                                placeholder="Max. liczba kursantów"
                                value={form.maxReservedStudents}
                                onChange={e => updateForm('maxReservedStudents', e.target.value)}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid>
                            <Button
                                className="add-hr-btn"
                                onClick={sendForm}>
                                Zapisz
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};