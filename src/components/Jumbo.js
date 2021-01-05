import React from "react";
import { Jumbotron, Form, Row, Col } from "react-bootstrap";

function Jumbo(props) {
  return (
    <Jumbotron>
      <Row className="d-flex justify-content-between">
        <Col>
          <div className="logo-font">
            <h1 className="shopifyFont">Nominate a movie</h1>
          </div>
        </Col>
        <Col className="align-self-end">
          <div
            className="help-font ml-auto text-right pointer"
            onClick={props.toggleHelp}
          >
            <div id="help">Help</div>
          </div>
        </Col>
      </Row>
      <Form.Group>
        <Form.Group>
          <Form.Control
            placeholder="Find your favorite movie..."
            onChange={props.handleInputChange}
          />
        </Form.Group>
      </Form.Group>
      <Row className="d-flex justify-content-between">
        <Col></Col>
        <Col className="align-self-end">
          <div
            className="help-font ml-auto text-right pointer"
            onClick={props.toggleSave}
          >
            <div id="help">Save Your Nominations</div>
          </div>
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default Jumbo;
