import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import '../Styles/Modal.css';
import '../Styles/Badge.css';
import '../Styles/Button.css';
import * as CONSTANTS from '../Constants';

function ModalTemplate(props) {
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
            <Col className="snapshots" xs={12} md={12} lg={6}>
              <img src="https://via.placeholder.com/160" alt="photo1" />

              <img src="https://via.placeholder.com/160" alt="photo2" />

              <img src="https://via.placeholder.com/160" alt="photo3" />

              <img src="https://via.placeholder.com/160" alt="photo4" />
            </Col>
            <Col className="descriptions" xs={12} md={12} lg={6}>
              <h4>Description</h4>
              <p>{props.data.description}</p>
              <div className="technologies">
                {props.data.technologies.map(tech => {
                  return (
                    <Badge className="badge" pill variant="danger">
                      {tech}
                    </Badge>
                  );
                })}
              </div>
              <br></br>
              <div className="buttons">
                <a className="demo-button" href={CONSTANTS.robinLink}>
                  Live Demo
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

export default ModalTemplate;
