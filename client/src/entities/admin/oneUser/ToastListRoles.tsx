import React from "react";
import { ListGroup } from "react-bootstrap";
import { IRole } from "../../../shared/interfaces";

interface IToastListRolesProps {
    data: IRole[];
}

const ToastListRoles: React.FC<IToastListRolesProps> = ({ data }) => {
    if (data.length === 0) {
        return <ListGroup.Item disabled={true}>Список пуст</ListGroup.Item>;
    }

    return (
        <>
            {data.map((role, index) => (
                <ListGroup.Item key={role.id} action>
                    {index + 1}. {role.name}
                </ListGroup.Item>
            ))}
        </>
    );
};

export default ToastListRoles;
