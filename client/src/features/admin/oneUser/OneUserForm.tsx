import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import {
    ChangePassword,
    FormRowsOneUser,
    ListGroupRoles,
    LoadingSpin,
    RowUser,
    RowUserDescription,
} from "../../../entities";
import { userApi } from "../../../shared/api";
import { useAppSelector } from "../../../shared/hooks";
import { IUsersResponse } from "../../../shared/interfaces";
import { ButtonGoBack } from "../../../shared/ui/buttons";

const OneUserForm = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const { isSuccess, isError, data } = userApi.useGetUserByIdQuery(userId);
    const {
        user,
        userDescriptions,
        roles,
        isLoading: isLoadingRoles,
    } = useAppSelector((store) => store.oneUser);
    const [
        delUser,
        {
            isError: isDelError,
            isLoading,
            isSuccess: isDelSuccess,
            data: delData,
        },
    ] = userApi.useDelUserByIdMutation();

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
                                <ListGroupRoles data={roles} />
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
