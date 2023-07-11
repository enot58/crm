import React from "react";
import { Col, Container, Navbar, Offcanvas, Row } from "react-bootstrap";
import { NavAskue, Profile } from "./ui";
import { INavLinkAskueProps, IRole } from "../../shared/interfaces";
import { useAppSelector } from "../../shared/hooks";

interface INavAskue {
    roles: IRole[];
    configData: INavLinkAskueProps[];
    logout: () => void;
}

const NavbarAskue: React.FC<INavAskue> = ({ roles, configData, logout }) => {
    // Получаем данные пользователя
    const { login } = useAppSelector((store) => store.user.user);

    // const { isError, data } = userDescriptionApi.useGetUserDescriptionQuery();
    // console.log(data, isError);
    return (
        // <Navbar bg="light" expand="sm">
        //     <Container fluid>
        //         <Navbar.Brand href="#">АСКУЭ</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="navbarScroll" />
        //         <Navbar.Collapse id="navbarScroll">
        //             <Col>
        //                 <NavAskue configData={configData} roles={roles} />
        //             </Col>
        //             <Profile name={login} logout={logout} />
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        <Navbar expand="sm" className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand href="#">CRM</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-sm`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Row>
                            <NavAskue configData={configData} roles={roles} />
                        </Row>

                        <Profile name={login} logout={logout} />
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavbarAskue;
