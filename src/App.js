import AllRoutes from "./Router/AllRoutes";

function App() {
  return (
    <div className="App">
      <AllRoutes />
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
