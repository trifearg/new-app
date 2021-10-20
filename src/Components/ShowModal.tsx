import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { IModal } from '../interfaces/IArticles'

const ShowModal: React.FC<IModal> = ({ isOpen, resultModal, closeModal }) => {
    const history = useHistory();

    const handleClose = () => {
        if (resultModal === 'Новость успешно создана!' || resultModal === 'Новость успешно обнавлена!') {
            history.replace('/news')
        }
        closeModal()
    };

    return (
        <>
            <Modal show={isOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>{resultModal}</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ShowModal
