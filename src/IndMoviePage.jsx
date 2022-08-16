import { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Sass/main.css";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";
import axios from "axios";

function IndMovie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const [videoId, setVideoId] = useState([]);
  const [trailerContainer, setTrailerContainer] = useState(false);
  const [moviInfo, setMoviInfo] = useState(true);

  const [dummyData, setDummyData] = useState([]);

  const baseUrl = "https://api.themoviedb.org/3";
  const apiKEY = "api_key=67011cf113627fe3311316af752fbcc5";
  const Api_URL =
    baseUrl +
    "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&" +
    apiKEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
  const newApi = `https://api.themoviedb.org/3/movie/766507/videos?${apiKEY}&language=en-US`;

  const getMovie = async () => {
    const response = await fetch(Api_URL);

    const data = await response.json();
    const { results } = data;

    setDummyData(results);
    const sameData = results.find((item) => item.id === parseInt(id));
    setMovie(sameData);
  };
  // function for the trailer video request

  async function movieVideo() {
    const vid = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?${apiKEY}&language=en-US`
    );
    const data = vid.data.results;
    data.map((val) => {
      return setVideoId(val.key);
    });
  }

  useEffect(() => {
    getMovie(movie);
    movieVideo();
  }, []);

  console.log(videoId, "video key");

  const videoContainer = () => {
    setTrailerContainer(true);
    setMoviInfo(false);
  };
  const videoContainerClose = () => {
    setTrailerContainer(false);
    setMoviInfo(true);
  };

  return (
    <div className="indmoviesContainer">
      <Header />
      <div
        className="container indMovie"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 10%), rgb(0 0 0 / 10%)), url(${imageBaseUrl}${movie.backdrop_path})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100%",
        }}
      >
        <div className="movieCard">
          {/* <img src={imageBaseUrl + movie.backdrop_path} alt="movie banner" /> */}
          <div className="overLay">
            {trailerContainer && (
              <div className="vidplay">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${videoId}}`}
                  width="100%"
                  playing={true}
                  muted
                  height="800px"
                />

                <button onClick={videoContainerClose}>X</button>
              </div>
            )}
            {moviInfo && (
              <div className="movieInfo">
                <Link to={"/"}>
                  <KeyboardBackspaceIcon style={{ color: "#ffff" }} />
                </Link>

                <h1>{movie.original_title}</h1>
                <p>Rating: {movie.vote_average}</p>
                <p>{movie.overview}</p>
                <p>
                  Release Date:<span id="relsDate">{movie.release_date}</span>
                </p>
                <p>
                  Orignal Language:{" "}
                  <span id="relsDate">{movie.original_language}</span>
                </p>
                <button className="playTrailerButton" onClick={videoContainer}>
                  Play the trailer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndMovie;
