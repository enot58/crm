import React from "react";
import { ButtonUI } from "../../../shared/ui";

const ButtonAuth: React.FC = () => {
    return (
        <ButtonUI
            label="Вход"
            variant="success"
            onClick={() => console.log("hello")}
        />
    );
};

export default ButtonAuth;
