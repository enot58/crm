import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useStringForFormInput } from "../../../shared/hooks";
import { IInputStringFormGroupProps } from "../../../shared/interfaces";
import { InputStringFormGroup } from "../../../shared/ui";

const CreateUserBodyModal: React.FC = () => {
    const [] = useStringForFormInput("", "Логин", false);

    return (
        <Row>
            <Form>
                <Row>
                    <InputStringFormGroup
                        disabled
                        onChange={}
                        title={"Имя"}
                        value={""}
                    />
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Row>
            </Form>
        </Row>
    );
};

export default CreateUserBodyModal;
