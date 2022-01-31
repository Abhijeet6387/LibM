import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Getbooks from "./components/Getbooks";
import AddBook from "./components/AddBook";
import Login from "./components/Login";
import Register from "./components/Register";
import IssueBook from "./components/IssueBook";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("my_token")) {
      getInfo();
    }
  }, [localStorage.getItem("my_token")]);

  const getInfo = () => {
    axios
      .get("/users/getInfo", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("my_token"),
        },
      })
      .then((res) => {
        setUserInfo(res.data.info);
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("my_token");
        setUserInfo(null);
      });
  };
  return (
    <>
      <Router>
        <Navbar userInfo={userInfo}></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/books"
            element={<Getbooks userInfo={userInfo} />}
          ></Route>
          <Route
            path="/addbook"
            element={<AddBook userInfo={userInfo} />}
          ></Route>
          <Route
            path="/issuebook/:id"
            element={<IssueBook userInfo={userInfo} />}
          ></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route
            path="/profile"
            element={<Profile userInfo={userInfo} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
