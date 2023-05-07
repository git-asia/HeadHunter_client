import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, TextField } from "@mui/material";
import logo from "../../assets/images/logo.png";
import "../../App.scss";
import "./Login.scss";

interface LoginProps {
  setLoggedIn: (loggedIn: boolean) => void;
}

interface LoginParams {
  email: string;
  password: string;
}

export const Login: React.FC<LoginProps> = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const login = async ({ email, password }: LoginParams) => {
    try {
      const response = await fetch("http://localhost:5000/logowanie_z_BE", {   // dodać ścieżkę do API z BE
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      if (response.ok) {
        setLoggedIn(true);
        localStorage.setItem('token', data.user.token);
        navigate("/");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred during login.');
    }
  };

  const handeSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    const user = await login({ email, password });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

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
              onChange={handleEmailChange}
            />
            <TextField
              className="login-pass"
              id="login-pass"
              type="password"
              placeholder="Hasło"
              variant="outlined"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
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