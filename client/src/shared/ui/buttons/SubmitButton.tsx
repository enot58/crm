import { Button, Form, FormInstance } from "antd";
import React from "react";

interface SubmitButtonProps {
    form: FormInstance;
    title: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ form, title }) => {
    const [submittable, setSubmittable] = React.useState(false);

    const values = Form.useWatch([], form);
    console.log(values);
    React.useEffect(() => {
        form.validateFields({ validateOnly: true }).then(
            () => {
                setSubmittable(true);
            },
            () => {
                setSubmittable(false);
            }
        );
    }, [form]);
    return (
        <Button type="primary" htmlType="submit" disabled={!submittable}>
            {title}
        </Button>
    );
};

export default SubmitButton;
