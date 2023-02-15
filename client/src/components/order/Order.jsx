import React from 'react';
import {Badge, Button, Card, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";


const Order = () => {
    let id = 3
    return (
       <Row className="mt-3">
           <Card>
               <Card.Header>
                   <Row>
                       <Col>
                           Заявка №1
                       </Col>
                       <Col sm={"auto"}>
                           Мастер №1
                           <Badge bg="success">
                               Secondary
                           </Badge>
                       </Col>
                   </Row>
               </Card.Header>
               <Card.Body>
                   <Card.Title>Заявка тудым сюдым</Card.Title>
                   <Card.Text>
                       Здесь её текст
                   </Card.Text>
                   <Link to={`/${id}`}>Перейти</Link>

               </Card.Body>
           </Card>
       </Row>
    );
};

export default Order;