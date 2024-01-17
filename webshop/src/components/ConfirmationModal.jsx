import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const ConfirmationModal = forwardRef(({ deleteProduct }, ref) => {
  const [show, setShow] = useState(false);
  const productToBeDeleted = useRef();

  const handleClose = () => setShow(false);

  useImperativeHandle(ref, () => ({
    handleShow(productClicked) {
      productToBeDeleted.current = productClicked;
      setShow(true);
    },
    closeModal() {
      setShow(false);
    }
  }));

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => deleteProduct(productToBeDeleted.current)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default ConfirmationModal