import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-transparent">
          <h4
            className="navbar-brand"
            href="/"
            style={{
              color: "white",
              fontFamily: "inherit",
            }}
          >
            <img src={logo} alt="logo"></img>
            Library Management System
          </h4>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fa fa-navicon"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item hover-link">
                <Link className="nav-link" to="/home">
                  <i className="fa fa-fw fa-home"></i>Home
                </Link>
              </li>
              <li className="nav-item hover-link">
                <Link className="nav-link" to="/books">
                  <i className="fa fa-fw fa-book"></i>Books
                </Link>
              </li>
              {!props.userInfo ? (
                <li className="nav-item hover-link">
                  <Link className="nav-link" to="/signin">
                    <i className="fa fa-fw fa-sign-in"></i>Sign In
                  </Link>
                </li>
              ) : (
                <li className="nav-item hover-link">
                  <Link className="nav-link" to="/profile">
                    <i className="fa fa-fw fa-user"></i>Profile
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
