import React, { useState } from "react";
import { API_URL } from "../../config/apiUrl";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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
  const [inputTextEmail, setInputTextEmail] = useState(false);
  const [inputTextPassword, setInputTextPassword] = useState(false);

  const login = async ({ email, password }: LoginParams) => {
    try {
      const response = await fetch(`${API_URL}/logowanie_z_BE`, {
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
    setPassword(event.target.value);
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
              value={email}
              // onChange={handleEmailChange} <--- poprawić
            />
            <p className="infoAboutValidation"
               style={{ display: inputTextPassword ? "none" : "" }}
            >Hasło musi mieć co najmniej 8 znaków, składać się z dużych i małych liter, cyfr i znaków specjalnych</p>
            <TextField
              className="login-pass"
              id="login-pass"
              type={showPassword ? "text" : "password"}
              placeholder="Hasło"
              variant="outlined"
              fullWidth
              value={password}
             // onChange={handlePasswordChange} <--- poprawić
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
              onChange={e => setInputTextPassword(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(e.target.value))}
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
            direction={"row"}
            justifyContent={"center"}
            alignItems={"baseline"}
          >
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
