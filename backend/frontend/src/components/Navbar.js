import React from "react";
// import React, { useState } from "react";
// import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Navbar() {
  // const [showModal, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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
              <li className="nav-item hover-link">
                <Link className="nav-link" to="/addbook">
                  <i className="fa fa-fw fa-plus"></i>Add Book
                </Link>
              </li>
              <li className="nav-item hover-link">
                <Link className="nav-link" to="/signin">
                  <i className="fa fa-fw fa-sign-in"></i>Sign In
                </Link>
              </li>
              {/* <li className="nav-item hover-link">
                <Link className="nav-link" onClick={handleShow} to="/home">
                  <i className="fa fa-fw fa-user"></i>Profile
                </Link>
              </li>
          */}
            </ul>
          </div>
        </nav>
      </div>

      {/* LOGIN MODAL */}
      {/* <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Profile</Modal.Title>
          <i
            className="fa fa-times"
            onClick={handleClose}
            style={{ fontSize: "28px" }}
          ></i>
        </Modal.Header>

        <Modal.Body></Modal.Body>
      </Modal> */}
    </>
  );
}
