import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavBar = () => {
    const role = 'master'
    const isAuth = true

    return (
        <>
            {
                isAuth ?
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink style={{textDecoration: "none"}} to='/'><Nav.Link href="/">Домашняя</Nav.Link></NavLink>

                                    {
                                        role === 'manager' || role === "admin" ?
                                            <>
                                                <NavLink style={{textDecoration: "none"}} to="/newform"><Nav.Link href="newform">Сформировать</Nav.Link></NavLink>

                                                <NavLink style={{textDecoration: "none"}} to="/formgroup"><Nav.Link href="formgroup">Группа заявок</Nav.Link></NavLink>
                                            </>

                                            :
                                            <></>
                                    }

                                    <NavLink style={{textDecoration: "none"}} to="allorders"><Nav.Link href="/allorders">Все заявки</Nav.Link></NavLink>
                                    <NavLink style={{textDecoration: "none"}} to="/catalog"><Nav.Link href="/catalog">Каталог</Nav.Link></NavLink>
                                    <NavLink style={{textDecoration: "none"}} to="/warehouse"><Nav.Link href="/warehouse">Склады</Nav.Link></NavLink>

                                    {
                                        role === 'admin' ?
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
                                            : <></>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    :
                    <></>
            }
        </>

    );
};

export default MyNavBar;