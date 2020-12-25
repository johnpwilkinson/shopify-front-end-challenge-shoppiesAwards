import React, { Component } from "react";
import {
  Navbar,
  ListGroup,
  Row,
  Col,
  Button,
  Table,
  Image,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import { getDetails, hello } from "./helpers";
import axios from "axios";
import DetailRow from "./DetailRow";
import Share from "./Share";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import 'react-notifications/lib/notifications.css';


class MyNoms extends Component {
  state = {
    summary: [],
    isLoading: true,
    name: "",
    url: "example.com",
    copied: false,
  };

  componentDidMount() {
    const movies = this.props.name.split(",");
    console.log(movies);
    const name = movies.shift();
    movies.map((movie) => this.getDetails(movie));
    let url = window.location.href;
    this.setState({ name, url });
  }

  createNotfication = () => {
    NotificationManager.success("URL Copied", "SUCCESS",3000,true);
  };

  handleCopy = () => {
    this.setState(
      {
        copied: true,
      },
      () => this.createNotfication()
    );
  };

  getDetails = (id) => {
    // console.log("yes");
    axios
      .get(`http://www.omdbapi.com/?apikey=977ea3e&i=${id}`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res.Title);
        let summary = [...this.state.summary];
        let movie = {
          title: res.Title,
          year: res.Year,
          rated: res.Rated,
          released: res.Released,
          runtime: res.Runtime,
          genre: res.Genre,
          director: res.Director,
          writer: res.Writer,
          actors: res.Actors,
          plot: res.Plot,
          language: res.Language,
          country: res.Country,
          awards: res.Awards,
          poster: res.Poster,
          metascore: res.Metascore,
          imdbrating: res.imdbRating,
          imdbvotes: res.imdbVotes,
          imdbid: res.imdbID,
        };
        summary.push(movie);
        this.setState({ summary: summary, isLoading: false });
      });
  };

  render() {
    if (this.state.summary.length < 5) {
      return (
        <div>
          <ListGroup className="suggestionsList status listy">
            <Row className="detail light-color-bg">
              <Col>
                <p className="shopifyDetailFont">Loading</p>
              </Col>
              <Col sm={3}>
                <div className="d-flex flex-row-reverse">
                  <Button>Remove</Button>
                </div>
              </Col>
            </Row>
            <div></div>
          </ListGroup>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar expand="lg" className="status">
            <Navbar.Brand className="mx-auto">
              <Row className="d-flex justify-content-between">
                <Col>
                  <div className="shopifyFont dark-color">
                    {this.state.name.charAt(0).toUpperCase() +
                      this.state.name.slice(1)}
                    's Nominations
                  </div>
                </Col>
                <Col>
                  <div className="ml-auto text-right">
                    <Share
                      handleCopy={this.handleCopy}
                      url={this.state.url}
                      title="Check out my Shoppie Nominations"
                    />
                  </div>
                </Col>
              </Row>
            </Navbar.Brand>
          </Navbar>
          <NotificationContainer />
          <div>
            {this.state.summary.map((movie) => (
              <ListGroup className="nomList status listy">
                <Row key={movie.id} className="detail light-color-bg">
                  <Col sm={3} className="icon">
                    <Image className="nomImage" src={movie.poster} rounded />
                  </Col>
                  <Col sm={9} className="align-self-end">
                    <Row className="nomDetWrapper">
                      <Col sm={4}>
                        <Table size="sm" borderless>
                          <tbody>
                            <DetailRow category="Title" value={movie.title} />
                            <DetailRow category="Year" value={movie.year} />
                            <DetailRow category="Rated" value={movie.rated} />
                            <DetailRow category="Genre" value={movie.genre} />
                            <DetailRow
                              category="Run Time"
                              value={movie.runtime}
                            />
                            <DetailRow
                              category="Release Date"
                              value={movie.released}
                            />
                            <DetailRow category="Awards" value={movie.awards} />
                          </tbody>
                        </Table>
                      </Col>
                      <Col sm={4}>
                        <Table size="sm" borderless>
                          <tbody>
                            <DetailRow
                              category="Director"
                              value={movie.director}
                            />
                            <DetailRow category="Writer" value={movie.writer} />
                            <DetailRow category="Actors" value={movie.actors} />
                            <DetailRow category="Plot" value={movie.plot} />
                          </tbody>
                        </Table>
                      </Col>
                      <Col sm={4}>
                        <Table size="sm" borderless>
                          <tbody>
                            <DetailRow
                              category="Meta Score"
                              value={movie.metascore}
                            />
                            <DetailRow
                              category="IMDB Rating"
                              value={movie.imdbrating}
                            />
                            <DetailRow
                              category="IMDB Votes"
                              value={movie.imdbvotes}
                            />
                            <DetailRow category="Title" value={movie.title} />
                            <DetailRow
                              category="Language"
                              value={movie.language}
                            />
                            <DetailRow
                              category="Country"
                              value={movie.country}
                            />
                            <DetailRow
                              category="More"
                              value={
                                <a
                                  href={`https://www.imdb.com/title/${movie.imdbid}/`}
                                  target="blank"
                                >
                                  Click here
                                </a>
                              }
                            />
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div></div>
              </ListGroup>
            ))}
          </div>
        </div>
      );
    }
  }
}
export default MyNoms;
