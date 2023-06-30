import React from "react";
import { useShowAndClose } from "../../../../shared/hooks";
import { ButtonForModals, ModalUi } from "../../../../shared/ui";
import BodyCreateObject from "./BodyCreateObject";

interface CreateObjectsProps {
    handleAction: () => void;
    name: string;
    address: string;
}

const CreateObject: React.FC<CreateObjectsProps> = ({ handleAction }) => {
    const [show, handleClose, handleShow] = useShowAndClose(false);

    return (
        <>
            <ButtonForModals title="Создать" handleShow={handleShow} />
            <ModalUi
                handleClose={handleClose}
                title="Создать"
                show={show}
                handleAction={handleAction}
            >
                <BodyCreateObject />
            </ModalUi>
        </>
    );
};

export default CreateObject;
