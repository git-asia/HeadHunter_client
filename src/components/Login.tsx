import React from "react";
import './Login.scss';

export const Login = () => {
    return (
        <div className="page-background">
            <div className="login-container">
                <h1 className="logo">MegaK</h1>
                <form>
                    <input className="login-email" type="email" placeholder="E-mail"/>
                    <input className="login-password" type="password" placeholder="Hasło"/>
                    <p>
                        <button type="button" className="link-button-password">Zapomniałeś hasła?</button>
                    </p>
                    <p>
                        Nie masz konta? <button type="button" className="link-button-register">Zarejestruj się</button>
                    </p>
                    <button type="submit" className="login-button">
                        Zaloguj się
                    </button>
                </form>
            </div>
        </div>
    )
}