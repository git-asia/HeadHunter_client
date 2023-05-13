import React from "react";
import { Header } from "../../components/Header/Header";
import { IoIosArrowDown } from "react-icons/io";
import {Button, Container, TextField} from "@mui/material";

import "./CVEdit.scss";
import "../../index.scss"
import logo from "../../assets/images/avatar-holder.png";

export const CVEdit = () => {
    return (
        <div className="CVEdit__container">
            <Header/>
            <div className="CVEdit__wrapper">
                <div className="CVEdit__back">
                    <IoIosArrowDown size={30} className="CVEdit__back__svg" />
                    <span className="CVEdit__back__span">Wróć</span>
                </div>
                <Container className="CVEdit_Usercard__container">
                    <div className="CVEdit_Usercard__avatar">
                        <img src={logo} alt="user logo" />
                    </div>
                    <p>Imię i nazwisko:</p>
                    <TextField
                        className="input-name"
                        name="name"
                        type="text"
                        placeholder="Imię i nazwisko"
                        variant="outlined"
                        fullWidth
                    />
                    <p>Nick z GitHuba:</p>
                    <TextField
                        className="input-name"
                        name="github-name"
                        type="text"
                        placeholder="nick z GitHuba"
                        variant="outlined"
                        fullWidth
                    />
                    <p>Numer telefonu:</p>
                    <TextField
                        className="input-name"
                        name="phone"
                        type="text"
                        placeholder="Numer telefonu"
                        variant="outlined"
                        fullWidth
                    />
                    <p>Adres e-mail:</p>
                    <TextField
                        className="input-name"
                        name="email"
                        type="email"
                        placeholder="Adres e-mail"
                        variant="outlined"
                        fullWidth
                    />
                </Container>
                <Container className="CVEdit_UserCV__container">
                    <div className="CVEdit_UserCV__text__container">
                        <h2>Oczekiwania w stosunku do zatrudnienia</h2>
                        <label>Preferowane miejsce pracy:
                            <select name="typeWork" id="typeWork">
                                <option value={1}>Praca w biurze</option>
                                <option value={2}>Praca zdalna</option>
                            </select>
                        </label>
                        <p>Docelowe miasto, gdzie chce pracować kandydat</p>
                        <TextField
                            className="input-name"
                            name="city"
                            type="text"
                            placeholder="Miasto, w którym chciałbym pracować"
                            variant="outlined"
                            fullWidth
                        />
                        <label>Oczekiwany typ kontraktu:
                            <select name="typeContract" id="typeContract">
                                <option value={1}>Umowa o pracę</option>
                                <option value={2}>B2B</option>
                                <option value={3}>Umowa zlecenie</option>
                                <option value={4}>Umowa o dzieło</option>
                            </select>
                        </label>
                        <p>Oczekiwane wynagrodzenie miesięczne netto (w PLN):</p>
                        <TextField
                            className="input-name"
                            name="salary"
                            type="number"
                            placeholder="Kwota netto w złótówkach"
                            variant="outlined"
                            fullWidth
                        />
                        <label>Zgoda na odbycie bezpłatnych praktyk/stażu na początek
                            <select name="can-free" id="canFree">
                                <option value={1}>Tak</option>
                                <option value={0}>Nie</option>
                            </select>
                        </label>
                        <p>Komercyjne doświadczenie w programowaniu (miesiące):</p>
                        <TextField
                            className="input-name"
                            name="months"
                            type="number"
                            placeholder="Czas komercyjnego zatrudnienia (w miesiącach)"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div className="CVEdit_UserCV__text__container">
                        <h2>O mnie</h2>
                        <TextField
                            className="input-name"
                            name="about"
                            type="text"
                            placeholder="Kilka słów o mnie"
                            multiline={true}
                            minRows={5}
                            maxRows={10}
                            fullWidth
                        />
                    </div>
                    <div className="CVEdit_UserCV__text__container">
                        <h2>Edukacja</h2>
                        <TextField
                            className="input-name"
                            name="education"
                            type="text"
                            placeholder="Kilka słów o mojej edukacji"
                            multiline={true}
                            minRows={5}
                            maxRows={10}
                            fullWidth
                        />
                    </div>
                    <div className="CVEdit_UserCV__text__container">
                        <h2>Kursy</h2>
                        <TextField
                            className="input-name"
                            name="courses"
                            type="text"
                            placeholder="Kilka słów o moich kursach"
                            multiline={true}
                            minRows={5}
                            maxRows={10}
                            fullWidth
                        />
                    </div>
                    <div className="CVEdit_UserCV__text__container">
                        <h2>Doświadczenie</h2>
                        <TextField
                            className="input-name"
                            name="experience"
                            type="text"
                            placeholder="Kilka słów o moim doświadczeniu"
                            multiline={true}
                            minRows={5}
                            maxRows={10}
                            fullWidth
                        />
                    </div>
                    <div className="CVEdit_UserCV__text__container">
                        <h2>Portfolio</h2>
                        <TextField
                            className="input-name"
                            name="portfolio"
                            type="text"
                            placeholder="Linki do mojego portfolio"
                            multiline={true}
                            minRows={5}
                            maxRows={10}
                            fullWidth
                        />
                    </div>
                    <div className="CVEdit_UserCV__text__container">
                        <h2>Projekty w zespole Scrumowym</h2>
                        <TextField
                            className="input-name"
                            name="projctsScrum"
                            type="text"
                            placeholder="Linki do projektów scrumowych oddzielone przecinkiem"
                            multiline={true}
                            minRows={5}
                            maxRows={10}
                            fullWidth
                        />
                    </div>
                    <div className="CVEdit_UserCV__text__container">
                        <h2>Projekty na zaliczenie</h2>
                        <TextField
                            className="input-name"
                            name="projctsCourses"
                            type="text"
                            placeholder="Linki do projektów zaliczeniowych oddzielone przecinkiem"
                            multiline={true}
                            minRows={5}
                            maxRows={10}
                            fullWidth
                        />
                    </div>
                    <Button className="sendCvBtn">
                        Wyślij
                    </Button>
                </Container>
            </div>
        </div>
    );
};
