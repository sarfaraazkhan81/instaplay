import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import play from "../assets/images/play.png";
import "../Sass/main.css";
import { Pagination } from "@mui/material";
import { DynamicStar } from "react-dynamic-star";
import Header from "./Header";
import Home from "./Home";
import axios from "axios";
import Cookies from "js-cookie";

import { SearchMovieApi, ListingApi } from ".././redux/constants/action-types";
import { useDispatch, useSelector } from "react-redux";

function Trending() {
  const dispatch = useDispatch();
  // consuming data from the redux store
  const searchApiDataFromStore = useSelector((state) => state.SearchApiReducer);
  const listingApiFromStore = useSelector((state) => state.ListingApiReducer);
  const trailerApiDataFromStore = useSelector(
    (state) => state.SearchApiReducer
  );
  const loginAuthR = useSelector((state) => state.LoginTokenReducer);

  // componenet states
  const [moviedata, setMovies] = useState([]);
  const [page, setPage] = useState();
  const [numberOfPages, setNumberOfPages] = useState(10);
  const [filterData, setFilterData] = useState([]);
  const [active, setActive] = useState(false);
  const [movieRatingNo, setMovieRatingNo] = useState([]);
  const [TrailerId, setTrailerId] = useState([]);
  const [trailerKey, setTrailerKey] = useState();
  const [hover, setHover] = useState(false);
  const [queary, setQueary] = useState("");
  const [tokenVerify, setIsTokenVerified] = useState(false);
  const navigate = useNavigate();

  // urls
  const baseUrl = "https://api.themoviedb.org/3";
  const apiKEY = `api_key=67011cf113627fe3311316af752fbcc5&page=${page}`;
  const Api_URL =
    baseUrl +
    "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&" +
    apiKEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  //api calling functions
  const getMovie = async () => {
    const response = await fetch(Api_URL);

    const data = await response.json();
    setMovies(data.results);
    console.log(data.results, "data");
    dispatch(ListingApi(data.results));
    setNumberOfPages(data.total_pages);
  };

  /// useEffect function
  useEffect(() => {
    getMovie();
    ratingNo();
  }, [page]);

  useEffect(() => {
    var temp = Cookies.get("newtoken");
    console.log("temp", temp);
    if (temp === undefined) {
      console.log("hello");
      navigate("/");
    } else {
      console.log("test");
      return;
    }
  }, []);

  //pagination
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  //search function input taker
  const searchText = (event) => {
    setFilterData(event.target.value);
  };

  //search main function
  let dataSearched = listingApiFromStore.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterData.toString().toLowerCase())
    );
  });

  // functios for the sorting

  //function to sort lowest firs
  const lowest = () => {
    const vote = [...listingApiFromStore];
    vote.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setMovies(vote);
  };

  // function for sorting highest first
  const highest = () => {
    const vote = [...listingApiFromStore];
    vote.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setMovies(vote);
  };

  const toggleClass = () => {
    setActive(!active);
  };

  const ratingNo = async () => {
    const response = await axios.get(Api_URL);
    const result = response.data.results;

    result.map((data) => {
      return setMovieRatingNo(data.vote_average);
    });
  };

  // const movieTrailerVideo = async (TrailerId) => {
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${TrailerId}/videos?api_key=67011cf113627fe3311316af752fbcc5&language=en-US`
  //   );

  //   const data = response.data.results;
  //   data.map((data) => {
  //     return setTrailerKey(data.key);
  //     return dispatch(ListingApi(data.key))

  //   });
  // };

  // movieTrailerVideo(TrailerId);

  let renderingTheDiv;

  if (hover && trailerKey) {
    renderingTheDiv = (
      <div className="videoContainer">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trailerKey}?controls=0&autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // for searching the query
  const getsSearchData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=67011cf113627fe3311316af752fbcc5&language=en-US&query=${queary}&page=${1}&include_adult=false`
    );
    const result = response.data.results;

    setMovies(result);
    dispatch(SearchMovieApi(result));
  };
  const queryTextHandler = (event) => {
    const inputData = event.target.value;
    // console.log(inputData);
    setQueary(inputData);
  };

  useEffect(() => {
    if (queary.length > 3) {
      getsSearchData();
    }
  }, [queary]);

  return (
    <div className="mainCntr">
      <Header
        mainFunc={searchText}
        queryTextHandler={queryTextHandler}
        // getsSearchData={getsSearchData}
      />
      <Home />
      <div className="trendingContainer">
        <div className="trnding">
          <div className="headingContainer">
            <div className="trendingHeading">
              <h1>Trending</h1>
            </div>
            <div className={active ? "active" : null} onClick={toggleClass}>
              <button
                id="filterBtn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Sort by rating
              </button>
              <div className="rating">
                <button onClick={highest}>High to Low</button>
                <button onClick={lowest}>Low to High</button>
              </div>
            </div>
          </div>
          <div
            className="cardsContainer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {dataSearched.map((data, index) => {
              return (
                <div key={index}>
                  <Link to={`/indmoviepage/${data.id}`} className="linktag">
                    <div
                      className="card"
                      onMouseOver={() => {
                        setTrailerId(data.id);
                      }}
                    >
                      <img src={imageBaseUrl + data.backdrop_path} alt="" />
                      {renderingTheDiv}

                      <div className="cardInfo">
                        <div className="leftinfo">
                          <h2>{data.original_title}</h2>
                          <div className="ratingContainer">
                            <DynamicStar
                              rating={data.vote_average / 2}
                              width={15}
                              height={15}
                              totalStars={5}
                              emptyStarColor={"#ffff"}
                              fullStarColor={"#FFBC00"}
                            />
                            {/* <p>{data.vote_average / 2} / 5</p> */}
                          </div>
                        </div>
                        <div className="rightinfo">
                          <img src={play} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="Paginat">
            <Pagination
              // variant="outlined"
              color="secondary"
              count={numberOfPages}
              onChange={(e) => handleChange(e.target.textContent)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
