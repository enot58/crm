import React from 'react';
import {Container, Form, Card, Button, Row} from "react-bootstrap"

const Auth = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: "600px" }}>
                <h2 className="m-auto">{"Авторизация"}</h2>
                <Form className="m-5 d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        type="password"
                    />
                    <Row className="d-flex justify-content-between">
                        <Button
                         className="mt-3 pointer-event" variant={"outline-success"}>
                            Войти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;