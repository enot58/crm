import React from 'react';
import {Badge, Button, Card, Col, Row} from "react-bootstrap";

const Order = () => {
    return (
       <Row className="mt-3">
           <Card>
               <Card.Header>
                   <Row>
                       <Col>
                           Заявка №1
                       </Col>
                       <Col>
                           Мастер №1
                           <Badge bg="success">
                               Secondary
                           </Badge>
                       </Col>
                       <Col>

                       </Col>
                   </Row>
               </Card.Header>
               <Card.Body>
                   <Card.Title>Special title treatment</Card.Title>
                   <Card.Text>
                       With supporting text below as a natural lead-in to additional content.
                   </Card.Text>
                   <Button variant="primary">Go somewhere</Button>
               </Card.Body>
           </Card>
       </Row>
    );
};

export default Order;