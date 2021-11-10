import "./App.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Home from "./components/Home";
import Getbooks from "./components/Getbooks";
// import AddBook from "./components/AddBook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Issuebook from "./components/Issuebook";

function App() {
  return (
    <>
      <Router>
        <Background></Background>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/books" element={<Getbooks />}></Route>
          <Route path="/issuebook" element={<Issuebook />}></Route>
          <Route path="/login" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
