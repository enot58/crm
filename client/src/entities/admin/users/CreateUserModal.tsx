import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CreateUserBodyModal from "./CreateUserBodyModal";

const CreateUserModal: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Создать пользователя
            </Button>

            <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Создать пользователя</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateUserBodyModal />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Создать
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CreateUserModal;
