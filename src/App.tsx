import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie" element={<Detail />}/>
        <Route path="*" element={<ErrorPage />}/> {/*Error page => last route always */}
      </Routes>
    </Router>
  );
}

export default App;
