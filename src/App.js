import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Portuguese from "./pages/portuguese/Portuguese";
import English from "./pages/english/English"

const App = () => (
  <Router basename="/portfolio-milena">
    <Routes>
      <Route path="/" element={<Portuguese />} />
      <Route path="/english" element={<English />} />
    </Routes>
  </Router>
)

export default App;
