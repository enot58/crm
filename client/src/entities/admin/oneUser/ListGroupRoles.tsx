import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { IRole } from "../../../shared/interfaces";
import { ButtonUI } from "../../../shared/ui";

interface IListGroupRolesProps {
    data: IRole[];
}

const ListGroupRoles: React.FC<IListGroupRolesProps> = ({ data }) => {
    return (
        <>
            <Col>
                <h6>Список ролей</h6>
                <ListGroup>
                    {data.map((role, index) => (
                        <ListGroup.Item key={role.id}>
                            {index + 1}. {role.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <Row>
                    <Col>
                        <ButtonUI
                            variant="primary"
                            label="Присвоить роль"
                            onClick={() => {}}
                        />
                    </Col>
                    <Col>
                        <ButtonUI
                            variant="danger"
                            label="Удалить роль"
                            onClick={() => {}}
                        />
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default ListGroupRoles;
