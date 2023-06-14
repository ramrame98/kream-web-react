import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { GlobalStyles } from "./styles";
function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
