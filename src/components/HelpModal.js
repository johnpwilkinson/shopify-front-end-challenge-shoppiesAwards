import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

function HelpModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.toggleModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <strong className="mr-auto toastTop">Help</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="toastTop">Shoppie Awards App</h4>
        <Row className="ml-1">
            <Col sm={1} className="icon">
                🎬
            </Col>
            <Col sm={11} className="align-self-end">
                Use the search box to find FIVE movies to nominate for a SHOPPIE award
            </Col>
        </Row>
        <Row className="ml-1">
            <Col sm={1} className="icon">
            ✅
            </Col>
            <Col sm={11} className="align-self-end">
                Click the NOMINATE button to add a movie to your nominations list
            </Col>
        </Row>
        <Row className="ml-1">
            <Col sm={1} className="icon">
            ❎
            </Col>
            <Col sm={11} className="align-self-end">
                Click the REMOVE button to remove a movie to your nominations list
            </Col>
        </Row>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.toggleModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HelpModal;
