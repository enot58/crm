import React, {useState} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import ListOrder from "../components/listOrder/ListOrder";
import CreateApplicationModal from "../components/modals/CreateApplicationModal";

const HomePage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Container>
            <Row className="mt-3 m-auto" style={{width: 200}}>

                <Button variant="primary" onClick={() => handleShow()}>Добавить заявку</Button>

            </Row>
            <Row>
                <CreateApplicationModal show = {show} handleClose={() => handleClose()}/>
            </Row>
            <Row>
                <ListOrder />
            </Row>
        </Container>
    );
};

export default HomePage;