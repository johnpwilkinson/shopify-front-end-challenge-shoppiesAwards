import React, { Component } from "react";
import axios from "axios";
import Suggestions from "./Suggestions";
import Nominations from "./Nominations";
import uuid from "react-uuid";
import { Container, Jumbotron, Form, Row, Col } from "react-bootstrap";
import ToastPop from "./Toast";
import HelpModal from "./HelpModal";
import { withRouter, Redirect } from "react-router-dom";
// import { OMDB_URL, OMDB_KEY } from "./utils/urls";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Loading from './Loading'

class Search extends Component {
  state = {
    query: "",
    results: [],
    nominations: [],
    showToast: [false, ""],
    showModal: false,
    showDetailModal: false,
    movieDetail: {},
    summary: [],
    saveToast: false,
    nominationIMDBIDs: "",
    name: "",
    redirect: false,
    goto: "",
    isLoading: true,
    // showFullToast: [false,
  };

  //   componentDidMount() {
  //     if (localStorage.getItem("nominations") !== null) {
  //       const nominations = localStorage.getItem("nominations");
  //       this.setState({ nominations });
  //     }
  //   }
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 5000);
    const nominations = localStorage.getItem("nominations");
    if (nominations) this.setState({ nominations: JSON.parse(nominations) });
  }

  getInfo = () => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=977ea3e&type=movie&s=${this.state.query}`
      )
      .then((res) => res.data)
      .then((res) => {
        this.setState({
          results: res.Search,
        });
      });
  };

  handleInputChange = (event) => {
    event.preventDefault();
    if (event.target.id === "saveNoms") {
      this.setState({
        name: event.target.value,
      });
    } else {
      this.setState(
        {
          query: event.target.value,
        },
        () => {
          this.getInfo();
        }
      );
    }
  };

  addNomination = (title, year, imdbId) => {
    if (this.state.nominations.length < 5) {
      console.log(title, year);
      let nominations = [...this.state.nominations];
      let newMovie = {
        id: uuid(),
        title: title,
        year: year,
        imdbid: imdbId,
      };
      nominations.push(newMovie);
      this.setState({ nominations }, () => {
        localStorage.setItem(
          "nominations",
          JSON.stringify(this.state.nominations)
        );
      });
    } else {
      this.setState({
        showToast: [
          true,
          "🚨 Oh, No 🚨",
          "There are SO MANY great movies, but please only nominate five",
        ],
      });
    }
    if (this.state.nominations.length === 4) {
      this.setState({
        showToast: [
          true,
          "🏆 Congratulations 🏆",
          "✅ You chose 5️⃣ fantastic films!",
        ],
      });
    }
  };

  closeToast = () => {
    this.setState({
      showToast: [false, ""],
    });
  };

  delNomination = (id) => {
    localStorage.clear();
    let nominations = this.state.nominations.filter((movie) => movie.id !== id);
    this.setState({ nominations }, () => {
      localStorage.setItem(
        "nominations",
        JSON.stringify(this.state.nominations)
      );
    });
  };

  toggleHelp = () => {
    !this.state.showModal
      ? this.setState({
          showModal: true,
        })
      : this.setState({
          showModal: false,
        });
  };

  toggleDetail = () => {
    this.setState({
      showDetailModal: false,
    });
  };

  getDetails = (id) => {
    // console.log("yes");
    axios
      .get(`http://www.omdbapi.com/?apikey=977ea3e&i=${id}`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res.Title);
        this.setState({
          movieDetail: {
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
          },
        });
      });
    this.setState({
      showDetailModal: true,
    });
  };

  toggleSave = (urls) => {
    if (this.state.nominations.length === 5) {
      this.setState({
        showToast: [true, "🏆 Save Your Nominations 🏆", "✅ Enter Your Name"],
        saveToast: true,
      });
    }
  };
  saveNoms = (event) => {
    event.preventDefault();
    let name = this.state.name;
    let noms = [...this.state.nominations];
    let nomImdbIds = "";
    noms.map((noms) => (nomImdbIds += noms.imdbid + ","));
    let payload = name + "," + nomImdbIds.slice(0, -1);
    let url = `/summary?query=${payload}`;
    this.setState({
      nominationIMDBIDs: payload,
      goto: url,
      redirect: true,
    });
    // this.renderRedirect(payload)
  };

  // renderRedirect = () => {
  //   return <Redirect to={this.state.goto}/>
  // }
  render() {
    if (this.state.redirect === true) {
      return <Redirect to={this.state.goto} />;
    }
    if (this.state.isLoading) {
      return (
        <Loading className="reel"/>
      );
    }
    return (
      <Container fluid className="fadez-in" >
        <Row>
          <Container fluid >
            <Jumbotron>
              <Row className="d-flex justify-content-between">
                <Col>
                  <div className="logo-font">
                    <h1 className="shopifyFont">Nominate a movie</h1>
                  </div>
                </Col>
                <Col className="align-self-end">
                  <div
                    className="help-font ml-auto text-right"
                    onClick={this.toggleHelp}
                  >
                    <div id="help">Help</div>
                  </div>
                </Col>
              </Row>
              <Form>
                <Form.Group>
                  <Form.Control
                    placeholder="Find your favorite movie..."
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Form>
              <Row className="d-flex justify-content-between">
                <Col></Col>
                <Col className="align-self-end">
                  <div
                    className="help-font ml-auto text-right"
                    onClick={this.toggleSave}
                  >
                    <div id="help">Save Your Nominations</div>
                  </div>
                </Col>
              </Row>
            </Jumbotron>
          </Container>
        </Row>
        <Row
          style={{
            zIndex: 0,
          }}
        >
          <Col>
            <Suggestions
              results={this.state.results}
              nominate={this.addNomination}
              nominations={this.state.nominations}
              toggleDetailModal={this.toggleDetail}
              toggleDetailStatus={this.state.showDetailModal}
              movieDetail={this.state.movieDetail}
              getDetails={this.getDetails}
            />
          </Col>
          <ToastPop
            show={this.state.showToast[0]}
            top={this.state.showToast[1]}
            message={this.state.showToast[2]}
            closeToast={this.closeToast}
            saveToast={this.state.saveToast}
            saveNoms={this.saveNoms}
            noms={this.state.nominationIMDBIDs}
            handleInputChange={this.handleInputChange}
          />
          <Col>
            <Nominations
              nominations={this.state.nominations}
              delNomination={this.delNomination}
            />
          </Col>
        </Row>
        <HelpModal show={this.state.showModal} toggleModal={this.toggleHelp} />
      </Container>
    );
  }
}

export default withRouter(Search);
