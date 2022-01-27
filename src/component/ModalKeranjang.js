import React from 'react';
import { Modal, Button } from "react-bootstrap";


const ModalKeranjang = ({showModal, handleClose, keranjangDetail}) => {
  
    if(keranjangDetail) {

        return (
             <Modal show={showModal} onHide={handleClose}>
             <Modal.Header closeButton>
             <Modal.Title>{keranjangDetail.product.nama}</Modal.Title>
             </Modal.Header>
             <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
             <Modal.Footer>
             <Button variant="secondary" onClick={handleClose}>
                 Close
             </Button>
             <Button variant="primary" onClick={handleClose}>
                 Save Changes
             </Button>
             </Modal.Footer>
         </Modal>
      )
    }

};

export default ModalKeranjang;
