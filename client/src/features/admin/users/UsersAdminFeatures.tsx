import React from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { CreateUserModal, UserTable } from "../../../entities";
import { authApi, userApi } from "../../../shared/api";
import { useAppSelector } from "../../../shared/hooks";

const UsersAdminFeatures = () => {
    const { data, isSuccess } = userApi.useGetAllUsersQuery();
    const { list, isError, isLoading } = useAppSelector(
        (store) => store.listUser
    );
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
                    data={list}
                    isSuccess={isSuccess}
                    goToProfile={goToProfile}
                />
            </Row>
        </Row>
    );
};

export default UsersAdminFeatures;
