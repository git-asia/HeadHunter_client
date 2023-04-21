import React from 'react';
import {Button, Container, Form, Image, ButtonGroup, Row, Col} from 'react-bootstrap';
import './Login.scss';
import logoImage from '../assets/react.svg' // testowe logo

export const Login: React.FC = () => {
    return (
        <div className="page-background">
            <Container className="login-container">
                <Row>
                    <Col>
                        <Form>
                            <div className="logo">
                                <Image src={logoImage} alt="MegaK Logo"/>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="login-email" type="email" placeholder="E-mail"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className="login-password" type="password" placeholder="Hasło"/>
                            </Form.Group>
                        </Form>
                        <div className="forgot-password-container">
                            <Button
                                variant="link"
                                className="forgot-password-link float-end"
                                //onClick={() => {
                                // }}
                            >
                                Zapomniałeś hasła?
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonGroup className="mb-3">
                            <Button className="forgot-password-link float-end" variant="outline-danger">Nie masz
                                konta?
                                Zarejestruj się</Button>
                        </ButtonGroup>
                    </Col>
                    <Col>
                        <ButtonGroup className="mb-3 float-end">
                            <Button className="link-login-button" variant="danger">Zaloguj się</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
