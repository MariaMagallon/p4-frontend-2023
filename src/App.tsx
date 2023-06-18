import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ErrorPage from "./pages/ErrorPage";
import Search from "./pages/Search";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<ErrorPage />} />{" "}
        {/*Error page => last route always */}
      </Routes>
    </Router>
  );
}

export default App;
