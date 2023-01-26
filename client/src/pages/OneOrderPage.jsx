import React from 'react';
import {Col, Container, Nav, Row, Tab, Tabs} from "react-bootstrap";

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
                        1
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
        </Container>
    );
};

export default OneOrderPage;