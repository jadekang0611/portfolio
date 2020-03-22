import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Article2(props) {
  return (
    <Modal
      {...props}
      size="
        large"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Article 2</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Article 2</h4>
        <p>
          Consequat minim nisi excepteur duis aute ea et enim. Aliquip amet anim
          nisi aliquip irure duis do nisi aliqua non. Ea elit fugiat in irure ad
          enim. Sint anim velit cupidatat occaecat sint.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default Article2;
