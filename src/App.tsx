import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ErrorPage from "./pages/ErrorPage";
import Search from "./pages/Search";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<ErrorPage />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
