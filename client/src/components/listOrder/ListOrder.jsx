import React from 'react';
import {Row} from "react-bootstrap";
import Order from "../order/Order";

const ListOrder = () => {
    return (
        <Row className="mt-3 m-auto">
            <Order />
            <Order />
            <Order />
        </Row>
    );
};

export default ListOrder;