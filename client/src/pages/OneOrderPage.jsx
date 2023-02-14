import React from 'react';
import {
    Button,
    Col,
    Container,
    FloatingLabel,
    Form,
    InputGroup,
    Nav,
    Row,
    Tab,
    Tabs,
    Toast,
    ToastContainer
} from "react-bootstrap";
import { BsFillPlusSquareFill } from "react-icons/bs"


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
                        <Row className="mt-3" style={{border: "1px solid grey", borderRadius: 20, maxHeight: "60vh"}}>
                            <Row className="mt-1" style={{maxHeight: "5vh"}}>
                                <Col>
                                    <BsFillPlusSquareFill color="green"/>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>
                        </Row>
                    </Tab>
                    <Tab eventKey="contact" title="Водитель">
                        3
                    </Tab>
                    <Tab eventKey="history" title="История">
                        4
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    );
};

export default OneOrderPage;