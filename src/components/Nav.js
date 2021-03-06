import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <Navbar>
        <Navbar.Brand fluid>
          {/* <Container fluid> */}
          <Row className="d-flex justify-content-between">
            <Col>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="logo-font classy">
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
