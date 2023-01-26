import React from 'react';
import {Button, Col, Container, FloatingLabel, Form, Nav, Row, Tab, Tabs, Toast, ToastContainer} from "react-bootstrap";

const OneOrderPage = () => {
    return (
        <Container>
            <Row className="mt-3">
                <h4>Заявка №5</h4>
            </Row>
            <Row className="mt-3">
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Мастер">
                        <Row>
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>Выбор типа оборудования</option>
                                    <option value="1">Канализация</option>
                                    <option selected="true" value="2">Отопление</option>
                                    <option value="3">Вентиляция</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>Выбор объекта</option>
                                    <option value="1">Застава</option>
                                    <option selected="true" value="2">Лугометрия</option>
                                    <option value="3">Континент</option>
                                </Form.Select>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Comments"
                                className="mb-3"
                            >
                                <Form.Control style={{ height: '200px' }} as="textarea" placeholder="Leave a comment here" />
                            </FloatingLabel>
                        </Row>

                        <Row>
                            <Button variant="success">Сохранить</Button>
                        </Row>

                    </Tab>
                    <Tab eventKey="profile" title="Менеджер">
                        2
                    </Tab>
                    <Tab eventKey="contact" title="Водитель">
                        3
                    </Tab>
                    <Tab eventKey="history" title="История">
                        4
                    </Tab>
                </Tabs>
            </Row>
            {/*<Row className="justify-content-end">
                <ToastContainer position="bottom-end">
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small className="text-muted">just now</small>
                        </Toast.Header>
                        <Toast.Body>See? Just like this.</Toast.Body>
                    </Toast>
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small className="text-muted">2 seconds ago</small>
                        </Toast.Header>
                        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Row>*/}
        </Container>
    );
};

export default OneOrderPage;