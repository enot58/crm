import React, { useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { IUser } from "../../../shared/interfaces";
import {
    ButtonUI,
    InputString,
    InputStringFormGroup,
} from "../../../shared/ui";

interface IRowUserProps {
    user: IUser;
}

const RowUser: React.FC<IRowUserProps> = ({ user }) => {
    return (
        <>
            <InputStringFormGroup
                disabled={false}
                title="Логин"
                value={user.login}
                onChange={() => {}}
            />
        </>
    );
};

export default RowUser;
