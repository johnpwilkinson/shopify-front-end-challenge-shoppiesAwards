import React from "react";
import { Navbar, ListGroup, Button, Row, Col } from "react-bootstrap";
import Toast from "./Toast";
import { InfoCircleFill, Info } from "react-bootstrap-icons";
import DetailModal from "./DetailModal";

function Suggestions(props) {
  const noms = props.nominations.map((movie) => movie.title);
  console.log(noms);
  return (
    <div>
      <Navbar expand="lg" className="status">
        <Navbar.Brand className="mx-auto">
          <span className="shopifyFont dark-color">Suggestions</span>
        </Navbar.Brand>
      </Navbar>
      <div>
        {(props.results || []).map((movie, index) => (
          <ListGroup className="suggestionsList status listy">
            <Row key={index} className="detail light-color-bg">
              <Col>
                {/* {console.log(movie.imdbID)} */}
                <p className="shopifyDetailFont">
                  {movie.Title} - {movie.Year}{" "}
                  <span onClick={() => props.getDetails(movie.imdbID)}>
                    <small>
                      <InfoCircleFill />
                    </small>
                  </span>
                </p>
              </Col>
              <Col sm={3}>
                {noms.indexOf(movie.Title) > -1 ? (
                  <div className="d-flex flex-row-reverse">
                    <Button
                      disabled
                      onClick={() => {
                        props.nominate(movie.Title, movie.Year, movie.imdbID);
                      }}
                    >
                      Nominate
                    </Button>
                  </div>
                ) : (
                  <div className="d-flex flex-row-reverse">
                    <Button
                      onClick={() => {
                        props.nominate(movie.Title, movie.Year, movie.imdbID);
                      }}
                    >
                      Nominate
                    </Button>
                  </div>
                )}
              </Col>
            </Row>
            <DetailModal
              show={props.toggleDetailStatus}
              toggleModal={props.toggleDetailModal}
              movieDetail={props.movieDetail}
            />
          </ListGroup>
        ))}
      </div>
    </div>
  );
}
export default Suggestions;
