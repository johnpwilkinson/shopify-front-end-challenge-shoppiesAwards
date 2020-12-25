import React from "react";
import { Modal, Button, Row, Col, Image, Table } from "react-bootstrap";
import DetailRow from "./DetailRow";

function DetailModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.toggleModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      scrollable="false"
    >
      <Modal.Header closeButton className="light-color-bg">
        <Modal.Title id="contained-modal-title-vcenter">
          <strong className="mr-auto toastTop">
            {props.movieDetail.title}
          </strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4 className="toastTop">Shoppie Awards App</h4> */}
        <Row className="ml-1">
          <Col sm={5} className="icon">
            <Image src={props.movieDetail.poster} rounded />
          </Col>
          <Col sm={7} className="align-self-end">
            <Table size="sm" borderless>
              <tbody>
                <DetailRow category="Title" value={props.movieDetail.title} />
                <DetailRow category="Year" value={props.movieDetail.year} />
                <DetailRow category="Rated" value={props.movieDetail.rated} />
                <DetailRow category="Genre" value={props.movieDetail.genre} />
                <DetailRow
                  category="Run Time"
                  value={props.movieDetail.runtime}
                />
                <DetailRow
                  category="Release Date"
                  value={props.movieDetail.released}
                />
                <DetailRow
                  category="Director"
                  value={props.movieDetail.director}
                />
                <DetailRow category="Writer" value={props.movieDetail.writer} />
                <DetailRow category="Actors" value={props.movieDetail.actors} />
                <DetailRow category="Plot" value={props.movieDetail.plot} />
                <DetailRow
                  category="Language"
                  value={props.movieDetail.language}
                />
                <DetailRow
                  category="Country"
                  value={props.movieDetail.country}
                />
                <DetailRow category="Awards" value={props.movieDetail.awards} />
                <DetailRow
                  category="Meta Score"
                  value={props.movieDetail.metascore}
                />
                <DetailRow
                  category="IMDB Rating"
                  value={props.movieDetail.imdbrating}
                />
                <DetailRow
                  category="IMDB Votes"
                  value={props.movieDetail.imdbvotes}
                />
                <DetailRow category="Title" value={props.movieDetail.title} />
              </tbody>
            </Table>
            <Row className="ml-1">
              <a
                href={`https://www.imdb.com/title/${props.movieDetail.imdbid}/`}
                target="blank"
              >
                Click here to get more info {props.movieDetail.title}
              </a>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="light-color-bg">
        <Button onClick={props.toggleModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailModal;
