import { useState, useEffect } from "react";
import AllRoutes from "./Router/AllRoutes";
import axios from "axios";
import Cookies from "js-cookie";

function App() {
  const [authToken, setAuthToken] = useState(false);

  const getTheToken = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/authentication/token/new?api_key=67011cf113627fe3311316af752fbcc5"
    );
    const gettoken = response.data.request_token;

    if (gettoken.length > 5) {
      Cookies.set("newtoken", gettoken);
      // localStorage.setItem("newtoken", gettoken);
      setAuthToken(true);
    } else {
      setAuthToken(false);
    }
  };
  useEffect(() => {
    getTheToken();
  }, []);
  console.log(authToken, "main");
  console.log(Cookies.get("newtoken"), "this is cookie");
  Cookies.remove("newtoken");
  console.log(Cookies.get("newtoken"), "this is cookie");
  return (
    <div className="App">
      <AllRoutes token={authToken} />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="login" element={<Login />} />

          <Route exact path="indmoviepage/:id" element={<IndMoviePage />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
