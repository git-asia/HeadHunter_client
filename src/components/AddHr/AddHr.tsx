import React, {SyntheticEvent, useState} from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import logo from "../../assets/images/logo.png";
import "../../index.scss";
import "./AddHr.scss";

export const AddHr: React.FC = () => {
    const emptyForm = {
        email: '',
        fullName: '',
        company: '',
        maxReservedStudents: "",
    };
    const [form, setForm] = useState(emptyForm);
    const [validForm1, setValidForm1] = useState(false);
    const [validForm2, setValidForm2] = useState(false);
    const [validForm3, setValidForm3] = useState(false);
    const [validForm4, setValidForm4] = useState(false);


    const updateForm = (key: string, value: string|number) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };


    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        setValidForm1(!form.email.includes('@'));
        setValidForm2(form.fullName==='');
        setValidForm3(form.company==='');
        setValidForm4(Number(form.maxReservedStudents)<1 || Number(form.maxReservedStudents)>999);

        if ((!form.email.includes('@')) || (form.fullName==='') || (form.company==='') || (Number(form.maxReservedStudents)<1 || Number(form.maxReservedStudents)>999)) {
            console.log("Popraw dane w formularzu")
        }else {

        try {
            const res = await fetch(`http://localhost:3001/manage/add-hr/:${form.email}/:${form.fullName}/:${form.company}/:${form.maxReservedStudents}'`);
            const data = await res.json();
            if(data.success){
                setForm(emptyForm);
                console.log(data.message);
            }
        }
        catch (e) {
            console.log("Coś poszło nie tak. Spróbuj później.")
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
                            <p className="info-validation"
                            style= {{ display: validForm1 ? "" : "none" }}
                            >Podaj prawidłowy adres e-mail</p>
                            <TextField
                                type="email"
                                placeholder="E-mail"
                                value={form.email}
                                onChange={e => {
                                    updateForm('email', e.target.value);
                                    setValidForm1(!form.email.includes('@'));
                                }}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid>
                            <p className="info-validation"
                               style= {{ display: validForm2 ? "" : "none" }}
                            >Podaj imię i nazwisko HR</p>
                            <TextField
                                type="text"
                                placeholder="Imię i nazwisko"
                                value={form.fullName}
                                onChange={e => {
                                    updateForm('fullName', e.target.value);
                                    setValidForm2(form.fullName==='');
                                }}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid>
                            <p className="info-validation"
                               style= {{ display: validForm3 ? "" : "none" }}
                            >Podaj nazwę firmy HR</p>
                            <TextField
                                type="text"
                                placeholder="Firma"
                                value={form.company}
                                onChange={e => {
                                    updateForm('company', e.target.value);
                                    setValidForm3(form.company==='');
                                }}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid>
                            <p className="info-validation"
                               style= {{ display: validForm4 ? "" : "none" }}
                            >Podaj liczbę między 1-999</p>
                            <TextField
                                type="number"
                                placeholder="Max. liczba kursantów"
                                value={form.maxReservedStudents}
                                onChange={e => {
                                    updateForm('maxReservedStudents', e.target.value);
                                    setValidForm4(Number(form.maxReservedStudents)<1 || Number(form.maxReservedStudents)>999);
                                }}
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