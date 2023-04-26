import React from 'react';
import {Button, Container, Form, ButtonGroup, Row, Col} from 'react-bootstrap';
import '../App.scss'
import './Login.scss';


export const Login: React.FC = () => {
    return (
        <div className="page-background">
            <Container className="login-container">
                <Row>
                    <Col>
                        <Form>
                            <div className="logo"></div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="login-email" type="email" placeholder="E-mail"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className="login-password" type="password" placeholder="Hasło"/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col xs={4}>
                        <Button
                            variant="light"
                            className="forgot-password-link"
                            //onClick={() => {
                            // }}
                        >
                            Zapomniałeś hasła?
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xl={8}>
                        <ButtonGroup className="mb-3">
                            <p>Nie masz konta?</p>
                            <Button className="register-link" variant="link">
                                Zarejestruj się</Button>
                        </ButtonGroup>
                    </Col>
                    <Col xl={4}>
                        <ButtonGroup className="mb-3">
                            <Button className="link-login-button" variant="light">Zaloguj się</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
