import { useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PathRoutes from "./helpers/Routes.helpers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={PathRoutes.HOME} element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
