import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/Modal2.css';
import '../Styles/Badge.css';
import '../Styles/Button.css';
import * as CONSTANTS from '../Constants';

function ModalTemplate2(props) {
  console.log(props.data.header);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal-header">
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body scrollable={true} className="modal-body">
        <Container>
          <Row>
            <Col className="snapshots2" xs={12} md={12} lg={6}>
              <img src={props.data.image} alt={props.data.header} />
            </Col>
            <Col className="descriptions" xs={12} md={12} lg={6}>
              <h4>Description</h4>
              <p>{props.data.description}</p>
              <br></br>
              <div className="buttons">
                <a className="read-button" href={props.data.link}>
                  Read more
                </a>
                <div className="spacing"></div>
                <a className="contact-me-button" href={CONSTANTS.myEmail}>
                  Contact Me
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default ModalTemplate2;
