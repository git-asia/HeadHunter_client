import React from 'react';
import { Container, Grid, TextField, Button } from "@mui/material";
import '../../App.scss';
import './PasswordReminder.scss';

export const PasswordReminder: React.FC = () => {
  return (
    <div className="page-background">
      <Container maxWidth="md" className="login-container">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="logo"/>
            <TextField
              className="login-email"
              color="primary"
              type="email"
              placeholder="E-mail"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button className="link-login-button" variant="contained">
              Zresetuj hasło
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};