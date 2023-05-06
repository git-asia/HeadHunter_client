import React, { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import logo from "../../assets/images/logo.png";
import "../../App.scss";
import "./Login.scss";

export const Login: React.FC = () => {
  const [inputTextEmail, setInputTextEmail] = useState(false);
  const [inputTextPassword, setInputTextPassword] = useState(false);

  return (
    <div className="page-background">
      <Container className="login-container">
        <Grid container spacing={1}>
          <Grid item xs={12} className="email-box">
            <img src={logo} alt="Logo" className="logo" />
            <p className="infoAboutValidation"
               style={{ display: inputTextEmail ? "none" : "" }}
            >To nie jest prawidłowy e-mail</p>
            <TextField
              className="login-email"
              id="login-email"
              type="email"
              placeholder="E-mail"
              variant="outlined"
              onChange={e => setInputTextEmail(/^\S+@\S+\.\S+$/.test(e.target.value))}
              fullWidth
            />
            <p className="infoAboutValidation"
               style={{ display: inputTextPassword ? "none" : "" }}
            >Hasło musi mieć co najmniej 8 znaków, składać się z dużych i małych liter, cyfr i znaków specjalnych</p>
            <TextField
              className="login-pass"
              id="login-pass"
              type="password"
              placeholder="Hasło"
              variant="outlined"
              fullWidth
              onChange={e => setInputTextPassword(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <Button className="forgot-password-link" color="primary">
              Zapomniałeś hasła?
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            container
            className="second-line"
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"baseline"}>
            <Grid item>
              <span className="login-ask">Nie masz konta?</span>
              <Button className="login-link">
                Zarejestruj się
              </Button>
            </Grid>
            <Grid item>
              <Button className="login-btn">
                Zaloguj się
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};