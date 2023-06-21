import React from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router";
import { FormRowsOneUser } from "../../../entities";
import { userApi } from "../../../shared/api";
import { IUsersResponse } from "../../../shared/interfaces";
import { ButtonGoBack } from "../../../shared/ui/buttons";

const OneUserForm = () => {
    const { userId } = useParams();

    const { isSuccess, isError, data } = userApi.useGetUserByIdQuery(userId);

    return (
        <>
            <Row>
                <ButtonGoBack />
            </Row>
            {isSuccess ? <FormRowsOneUser /> : <h6>Loading...</h6>}
        </>
    );
};

export default OneUserForm;
