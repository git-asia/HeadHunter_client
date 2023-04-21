import React from "react";
import './Login.scss';

export const Login = () => {
    return (
        <div className="page-background">
            <div className="login-container">
                <img className="logo" src="../assets/logo" alt="MegaK"/>
                <form>
                    <input className="login-email" type="email" placeholder="E-mail"/>
                    <input className="login-password" type="password" placeholder="Hasło"/>
                    <div>
                        <button type="button" className="link-button-password">Zapomniałeś hasła?</button>
                    </div>
                    <div className="link-register">
                        <button type="button" className="link-register-button">
                            <p>Nie masz konta?</p>
                            Zarejestruj się
                        </button>
                    </div>
                    <button type="submit" className="login-button">
                        Zaloguj się
                    </button>
                </form>
            </div>
        </div>
    )
}