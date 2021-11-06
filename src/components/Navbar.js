import React from "react";

export default function Navbar() {
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
            <img src="logo.png" alt="logo"></img>
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item hover-link">
                <a className="nav-link" href="/">
                  <i className="fa fa-fw fa-home"></i>Home
                </a>
              </li>
              <li className="nav-item hover-link">
                <a className="nav-link" href="/">
                  <i className="fa fa-fw fa-book"></i>Books
                </a>
              </li>
              <li className="nav-item hover-link">
                <a className="nav-link" href="/">
                  <i className="fa fa-fw fa-clock-o"></i>Availability
                </a>
              </li>
              <li className="nav-item hover-link">
                <a className="nav-link" href="/">
                  <i className="fa fa-fw fa-check"></i>Issue Book
                </a>
              </li>
              <li className="nav-item hover-link">
                <a className="nav-link" href="/">
                  <i className="fa fa-fw fa-user"></i>Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
