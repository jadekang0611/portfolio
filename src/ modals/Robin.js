import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import '../Styles/Modal.css';

function Robin(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Article 1</Modal.Title>
      </Modal.Header>
      <Modal.Body scrollable={true}>
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
              <p>
                Minim id commodo dolor duis dolore fugiat ea elit aliqua Lorem
                dolore dolore pariatur minim. Pariatur consequat occaecat
                reprehenderit et voluptate nostrud aute ad. Elit reprehenderit
                nisi quis culpa cupidatat labore officia duis cupidatat do
                consequat commodo anim cillum. Lorem nostrud proident in sit.
                Excepteur eu duis duis adipisicing.
              </p>
              <Badge variant="danger">Javascript</Badge>
              <Badge variant="danger">Javascript</Badge>
              <Badge variant="danger">Javascript</Badge>
              <a href="https://myrobin.io">Live</a>
              <a href="https://myrobin.io">Live</a>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Robin;
