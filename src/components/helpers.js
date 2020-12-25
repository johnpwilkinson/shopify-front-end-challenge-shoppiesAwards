import axios from "axios";

export const getDetails = (id) => {
  // console.log("yes");
  axios
    .get(`http://www.omdbapi.com/?apikey=977ea3e&i=${id}`)
    .then((res) => res.data)
    .then((res) => {
      console.log(res.Title);
      let summary = [... this.state.summary]
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
      this.setState({
        summary: {},
      });
    });
};

export const hello = (word) => `<h1>Hello, ${word}</h1>`;
