import { Button, Form, Input } from "antd";
import { FormInstance, Rule } from "antd/es/form";
import React from "react";
import { SubmitButton } from "../../shared/ui";

interface PropsLogin {
    label: string;
    name: string;
    rules: Rule[];
}
interface PropsPasword {
    label: string;
    name: string;
    rules: Rule[];
}

interface AuthLoginProps {
    onFinish: (e) => void;
    isError?: boolean;
    messageError?: string;
    isErrorLogin?: boolean;
    messageErrorLogin?: string;
    isErrorPassword?: boolean;
    messageErrorPassowrd?: string;
    isLoadingLogin?: boolean;
    isLoadingPassword?: boolean;
    form: FormInstance;
}

const AuthLogin: React.FC<AuthLoginProps> = ({
    onFinish,
    isError,
    messageError,
    isErrorLogin,
    isErrorPassword,
    isLoadingLogin,
    isLoadingPassword,
    messageErrorLogin,
    messageErrorPassowrd,
    form,
}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Form
                form={form}
                name="validateOnly"
                autoComplete="off"
                onFinish={onFinish}
                style={{ width: "300px" }}
            >
                <Form.Item
                    label={"Логин"}
                    hasFeedback
                    validateStatus={isError ? "error" : "success"}
                    name="login"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, введите логин",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={"Пароль"}
                    hasFeedback
                    validateStatus={isError ? "error" : "success"}
                    name="password"
                    help={messageError}
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, введите пароль",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                    {/* <SubmitButton form={form} title="Войти" /> */}
                </Form.Item>
            </Form>
        </div>
    );
};

export default AuthLogin;
