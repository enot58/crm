import React, { useState } from "react";
import { Form, Input, Button } from "antd";
//import { Alert, Card, Container, Form } from "react-bootstrap";
import { ButtonUI, InputString } from "../../shared/ui";
import { IInputStringProps } from "../../shared/interfaces";
import { LoadingSpin } from "../../entities";
import { LoadingVariant } from "../../shared/config";
import { authApi, useLoginMutation } from "../../shared/api";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { useAppSelector } from "../../shared/hooks";
import { AuthLogin } from "../../features";

const useLogin = () => {
    const [login, setLogin] = useState("");
    const loginProps: IInputStringProps = {
        disabled: false,
        type: "text",
        value: login,
        title: "Логин",
        onChange: (e) => setLogin(e.target.value),
    };
    return [login, loginProps] as const;
};
const usePassword = () => {
    const [password, setPassword] = useState("");
    const passwordProps: IInputStringProps = {
        disabled: false,
        type: "password",
        value: password,
        title: "Пароль",
        onChange: (e) => setPassword(e.target.value),
    };
    return [password, passwordProps] as const;
};

const AuthWidget: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [form] = Form.useForm();
    const values = Form.useWatch([], form);

    // Получим статус и ошибку
    const { isError, dataError, isAuth } = useAppSelector(
        (store) => store.user
    );
    if (isAuth) {
        navigate(location.state?.from || "/", { replace: true });
    }

    const userData = {
        login: values === undefined ? "" : values.login,
        password: values === undefined ? "" : values.password,
    };

    const [loginMutation, { isLoading }] = useLoginMutation();
    const { isLoading: isCheckLoading, data } = authApi.useCheckQuery();
    const { user } = useAppSelector((store) => store.user);

    if (isLoading || isCheckLoading) {
        return <LoadingSpin variant={LoadingVariant.INFO} />;
    }
    if (data && user !== null) {
        navigate("/", { replace: true });
    }

    const onFinish = (e: any) => {
        //e.preventDefault();
        try {
            const login = loginMutation(userData);

            if (login && user !== null) {
                navigate(location.state?.from || "/", { replace: true });
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <AuthLogin
                form={form}
                onFinish={onFinish}
                isError={isError}
                messageError={
                    dataError && dataError.data ? dataError.data.message : ""
                }
            />
        </div>
    );
};

export default AuthWidget;
