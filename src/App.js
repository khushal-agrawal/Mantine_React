import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./List";
import DetailPage from "./DetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
