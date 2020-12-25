import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

function Nav(props) {
  return (
    <div>
      <Navbar>
        <Navbar.Brand fluid>
          {/* <Container fluid> */}
          <Row className="d-flex justify-content-between">
            <Col>
            <Link to="/">
              <div className="logo-font">
                <i class="fas fa-ticket-alt"></i> | Shoppies
              </div>
              </Link>
            </Col>
          </Row>
          {/* </Container> */}
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Nav;
