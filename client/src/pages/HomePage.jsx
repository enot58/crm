import React from 'react';
import {Button, Container, Row} from "react-bootstrap";
import ListOrder from "../components/listOrder/ListOrder";

const HomePage = () => {
    return (
        <Container>
            <Row className="mt-3 m-auto" style={{width: 200}}>

                <Button variant="primary">Добавить заявку</Button>

            </Row>
            <Row>
                <ListOrder />
            </Row>
        </Container>
    );
};

export default HomePage;