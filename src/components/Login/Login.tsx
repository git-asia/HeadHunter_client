import React, { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import logo from "../../assets/images/logo.png";
import "../../App.scss";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setLoggedIn: (loggedIn: boolean) => void;
}

interface LoginParams {
  email: any;
  password: any;
}

export const Login: React.FC<LoginProps> = ({setLoggedIn}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const login = async ({email, password}: LoginParams) => {
    try {
      const response = await fetch('http://localhost:5000/logowanie_z_BE', {   // dodać ścieżkę do API z BE
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })
        if (response.ok) {
        setLoggedIn(true);
        navigate('/');
        } else {
          // dodać obługę błędu
        }
    } catch () {
      // dodać obsługę błędu
    }
  }

  const handeSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    const user = await login({email : email, password : password})
  }

  return (
    <div className="page-background">
      <Container className="login-container">
        <Grid container spacing={1}>
          <Grid item xs={12} className="email-box">
            <img src={logo} alt="Logo" className="logo" />
            <TextField
              className="login-email"
              id="login-email"
              type="email"
              placeholder="E-mail"
              variant="outlined"
              fullWidth
              value={email}
            />
            <TextField
              className="login-pass"
              id="login-pass"
              type="password"
              placeholder="Hasło"
              variant="outlined"
              fullWidth
              value={password}
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
              <Button className="login-btn" onClick={handeSubmit}>
                Zaloguj się
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};