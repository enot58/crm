import React from "react";

interface IuseStringForFormInputProps {
    initialValue: string;
    title: string;
    disabled: boolean;
}

const useStringForFormInput = (
    initialValue: string,
    title: string,
    disabled: boolean
) => {
    const [value, setValue] = React.useState(initialValue);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(String(e.target.value));
    };

    return [value, title, disabled, setValue, handleInputChange];
};

export default useStringForFormInput;
