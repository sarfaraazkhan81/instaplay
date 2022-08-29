// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import YouTube from "react-youtube";

// function GetTheVide() {
//   const [movieVideo, setMovieVideo] = useState([]);

//   const baseUrl = "https://api.themoviedb.org/3";
//   const apiKEY = `api_key=67011cf113627fe3311316af752fbcc5&`;
//   const Api_URL = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKEY;
//   const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

//   //   https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=67011cf113627fe3311316af752fbcc5"

//   // `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
//   const newApi = `https://api.themoviedb.org/3/movie/766507/videos?${apiKEY}&language=en-US`;

//   const getDataForTrailerPlay = async () => {
//     const req = await fetch(newApi);
//     const data = await req.json();
//     const allData = data.results;
//     allData.map((data) => {
//       return console.log(data, "checking the id");
//     });
//   };
//   useEffect(() => {
//     getDataForTrailerPlay();
//   }, []);

//   return (
//     <div style={{ color: "black" }}>
//       <div className="videoContainer">
//         <h1>Get the Video</h1>
//         {/* {movieVideo.map((data) => {
//           return (
//             <>
//               <YouTube videoId={data.key} />;
//             </>
//           );
//         })} */}
//       </div>
//     </div>
//   );
// }

// export default GetTheVide;

// let item = ["PEN", "PENCIL", "PAPER"];
// payment();
// function cart() {
//   console.log("this is the cart function");
// }

// cart(function payment() {
//   console.log("this is the payment function ");
// });
