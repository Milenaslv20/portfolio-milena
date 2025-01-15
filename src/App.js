import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Portuguese from "./pages/portuguese/Portuguese";

const App = () => (
  <Router basename="/portfolio-milena">
    <Routes>
      <Route path="/" element={<Portuguese />} />
    </Routes>
  </Router>
)

export default App;
