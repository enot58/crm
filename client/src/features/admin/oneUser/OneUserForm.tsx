import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import {
    ChangePassword,
    FormRowsOneUser,
    ListGroupRoles,
    LoadingSpin,
    RowUser,
    RowUserDescription,
} from "../../../entities";
import { rolesApi, userApi } from "../../../shared/api";
import { useAppSelector } from "../../../shared/hooks";
import { ButtonGoBack } from "../../../shared/ui/buttons";

const OneUserForm = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const { isSuccess } = userApi.useGetUserByIdQuery(userId);
    const { data: arrRoles } = rolesApi.useGetAllRolesQuery();
    console.log(arrRoles);
    const {
        user,
        userDescriptions,
        roles,
        isLoading: isLoadingRoles,
    } = useAppSelector((store) => store.oneUser);
    const [delUser] = userApi.useDelUserByIdMutation();
    const handleAddRole = (id: number) => {};
    const handleDel = () => {
        delUser(userId);
        navigate(-1);
    };

    return (
        <>
            <Row>
                <ButtonGoBack />
            </Row>
            {isSuccess ? (
                <FormRowsOneUser onClick={handleDel}>
                    <Row>
                        <RowUser user={user} />
                        <ChangePassword />
                    </Row>
                    <Row>
                        <RowUserDescription {...userDescriptions} />
                    </Row>
                    <Row>
                        <Col sm={6}>
                            {isLoadingRoles ? (
                                <LoadingSpin variant="warning" />
                            ) : (
                                <ListGroupRoles
                                    roleUser={roles}
                                    dataAllRoles={arrRoles ? arrRoles : []}
                                />
                            )}
                        </Col>
                    </Row>
                </FormRowsOneUser>
            ) : (
                <LoadingSpin variant="primary" />
            )}
        </>
    );
};

export default OneUserForm;
