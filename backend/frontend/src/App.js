import "./App.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Home from "./components/Home";
import Getbooks from "./components/Getbooks";
import AddBook from "./components/AddBook";
import Login from "./components/Login";
import Register from "./components/Register";
import IssueBook from "./components/IssueBook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <Route path="/addbook" element={<AddBook />}></Route>
          <Route path="/issuebook" element={<IssueBook />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
