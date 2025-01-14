import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Portuguese from "./pages/portuguese/Portuguese";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Portuguese />} />
    </Routes>
  </Router>
)

export default App;
