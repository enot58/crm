import React from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { CreateUserModal, UserTable } from "../../../entities";
import { userApi } from "../../../shared/api";

const UsersAdminFeatures = () => {
    const { data, isSuccess } = userApi.useGetAllUsersQuery();
    const navigate = useNavigate();

    // По клику переходм в профиль по id
    const goToProfile = (id: number) => {
        navigate(`/admin/users/${id}`);
    };

    return (
        <Row>
            <h4>Список пользователей</h4>
            <Row>
                <CreateUserModal />
            </Row>
            <Row className="mt-3">
                <UserTable
                    data={data}
                    isSuccess={isSuccess}
                    goToProfile={goToProfile}
                />
            </Row>
        </Row>
    );
};

export default UsersAdminFeatures;
