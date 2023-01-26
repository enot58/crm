import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const MyNavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Домашняя</Nav.Link>
                        <Nav.Link href="#link">Сформировать</Nav.Link>
                        <Nav.Link href="#link">Все заявки</Nav.Link>
                        <Nav.Link href="#link">Каталог</Nav.Link>
                        <Nav.Link href="#link">Склады</Nav.Link>
                        <NavDropdown title="Админ" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Добавить пользователя</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Добавить склад
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Добавить тип заявки
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Добавить объект
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.5">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavBar;