import React from "react";
import { Row, Form, Col, ListGroup, Image, Button } from "react-bootstrap";
import { useAppSelector } from "../../../shared/hooks";
import { IUsersResponse } from "../../../shared/interfaces";
import { ButtonUI, InputStringFormGroup } from "../../../shared/ui";
import RowUser from "./RowUser";
import RowUserDescription from "./RowUserDescription";

interface IFormRowsOneUserProps {
    children: React.ReactNode;
    // Добавляем тип onClick
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FormRowsOneUser: React.FC<IFormRowsOneUserProps> = ({
    children,
    onClick,
}) => {
    const { user, roles, userDescriptions } = useAppSelector(
        (store) => store.oneUser
    );

    return (
        <>
            <Form>
                {children}

                <Row className="mt-3">
                    <Col sm={3}>
                        <Button variant="primary" type="submit">
                            Сохранить
                        </Button>
                    </Col>
                    <Col sm={3}>
                        <Button variant="danger" onClick={onClick}>
                            Удалить Пользователя
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default FormRowsOneUser;
