import React, { useState } from "react";
import { useEffect } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import Header from ".   /Header";
import "./Header.css";
import "./home.css";

function Home() {
  const [moviedata, setMovies] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [page, setPage] = useState();
  const [numberOfPages, setNumberOfPages] = useState(10);

  const baseUrl = "https://api.themoviedb.org/3";
  const apiKEY = `api_key=67011cf113627fe3311316af752fbcc5&page=${page}`;
  const Api_URL = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  const getMovie = async () => {
    const response = await fetch(Api_URL);

    const data = await response.json();
    setMovies(data.results);
    setNumberOfPages(data.total_pages);
  };

  useEffect(() => {
    getMovie();
  }, [page]);

  const searchText = (event) => {
    setFilterData(event.target.value);
  };

  let dataSearched = moviedata.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterData.toString().toLowerCase())
    );
  });

  // function to get input

  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className="home">
      <div className="headerSection">
        <Header mainFunc={searchText} />
      </div>

      <div className="homeSection">
        <div className="cardsContainer">
          {dataSearched.map((data) => {
            return (
              <>
                <Link
                  className="linktag"
                  to={`/indmovie/${data.id}`}
                  key={data.id}
                >
                  <div key={data.id} className="card">
                    <img
                      key={data.id}
                      src={imageBaseUrl + data.backdrop_path}
                      alt=""
                    />
                    <div className="cardInfo" key={data.id}>
                      <h2 key={data.id}>{data.original_title}</h2>
                      <div className="ratingContainer">
                        <StarRateIcon
                          key={data.id}
                          style={{ color: "yellow" }}
                        />
                        <p>{data.vote_average}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
        <div className="Paginat">
          <Pagination
            variant="outlined"
            count={numberOfPages}
            onChange={(e) => handleChange(e.target.textContent)}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useRef } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header(props) {
  return (
    <div className="header">
      <div className="header_center">
        <input type="text" onChange={props.mainFunc} />
        <SearchIcon />
      </div>
    </div>
  );
}

// const movieTrailerVideo = async () => {
//   //https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
// };

// if (hover && video) {
//   content = (
//     <div className="videoContainer">
//       <iframe
//         src={`https://www.youtube-nocookie.com/embed/${video.key}?controls=0&autoplay=1&mute=1`}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// }
