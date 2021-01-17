import React from "react";
import { Navbar, ListGroup, Row, Col } from "react-bootstrap";
import { InfoCircleFill } from "react-bootstrap-icons";
import DetailModal from "./DetailModal";
import AwesomeButton from "./AwesomeButton";

function Suggestions(props) {
  const noms = props.nominations.map((movie) => movie.imdbid);
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
              <Col className="col-12 col-md-6 style">
                {/* {console.log(movie.imdbID)} */}
                <p className="shopifyDetailFont">
                  {movie.Title} - {movie.Year}{" "}
                  <span
                    onClick={() => props.getDetails(movie.imdbID)}
                    className="pointer"
                  >
                    <small>
                      <InfoCircleFill />
                    </small>
                  </span>
                </p>
              </Col>
              <Col className="col-12 col-md-6 style">
                {noms.indexOf(movie.imdbID) > -1 ? (
                  <div className="d-flex flex-row-reverse shopifyDetailFont mobileMovieButton">
                    <AwesomeButton
                      
                      color={"red"}
                      isDisabled={true}
                      content={"Nominate"}
                      onClick={() => {
                        props.nominate(movie.Title, movie.Year, movie.imdbID);
                      }}
                    ></AwesomeButton>
                  </div>
                ) : (
                  <div className="d-flex flex-row-reverse shopifyDetailFont">
                    <AwesomeButton
                      className="button-1-14"
                      color={"green"}
                      isDisabled={false}
                      action={props.nominate}
                      title={movie.Title}
                      year={movie.Year}
                      imdb={movie.imdbID}
                      content={"Nominate"}
                    ></AwesomeButton>
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
