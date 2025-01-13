import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeP from "./pages/portuguese/HomeP";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeP />} />
    </Routes>
  </Router>
)

export default App;
