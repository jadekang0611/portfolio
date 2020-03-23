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
              {props.data.images.map((img, id) => {
                return <img key={id} src={img} alt="screenshots" />;
              })}
            </Col>
            <Col className="descriptions" xs={12} md={12} lg={6}>
              <h4>Description</h4>
              <p>{props.data.description}</p>
              <div className="technologies">
                {props.data.technologies.map((tech, id) => {
                  return (
                    <Badge key={id} className="badge" pill>
                      {tech}
                    </Badge>
                  );
                })}
              </div>
              <br></br>
              <div className="buttons">
                <a className="demo-button" href={props.data.demo}>
                  Demo
                </a>
                <div className="spacing"></div>

                <a className="github-button" href={props.data.github}>
                  Github
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
