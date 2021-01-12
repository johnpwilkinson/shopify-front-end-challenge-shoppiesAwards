import React from "react";
import { Navbar, ListGroup, Row, Col } from "react-bootstrap";
import AwesomeButton from "./AwesomeButton";
function Nominations(props) {
  return (
    <div>
      <Navbar expand="lg" className="status">
        <Navbar.Brand className="mx-auto">
          <span className="shopifyFont dark-color">Nominations</span>
        </Navbar.Brand>
      </Navbar>

      <div>
        {props.nominations.length > 0 ? (
          props.nominations.map((movie) => (
            <ListGroup className="suggestionsList status listy">
              <Row key={movie.id} className="detail light-color-bg">
                <Col sm={9}>
                  {console.log(movie)}
                  <p className="shopifyDetailFont">
                    {movie.title} - {movie.year}{" "}
                  </p>
                </Col>
                <Col sm={3}>
                  <div className="d-flex flex-row-reverse shopifyDetailFont">
                    <AwesomeButton
                      className="button-1-14"
                      movie={movie.id}
                      action={props.delNomination}
                      content={"Remove"}
                    >
                    </AwesomeButton>
                  </div>
                </Col>
              </Row>
              <div></div>
            </ListGroup>
          ))
        ) : (
          <p className="shopifyDetailFont text-center mt-2 light-color">
            No Nominations yet...
          </p>
        )}
      </div>
    </div>
  );
}
export default Nominations;
