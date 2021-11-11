import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              {/* <li className="nav-item hover-link">
                <a className="nav-link" href="/">
                  <i className="fa fa-fw fa-clock-o"></i>Availability
                </a>
              </li> */}
              <li className="nav-item hover-link">
                <Link className="nav-link" to="/issuebook">
                  <i className="fa fa-fw fa-id-card"></i>Issue Book
                </Link>
              </li>
              <li className="nav-item hover-link">
                <Link className="nav-link" onClick={handleShow} to="/login">
                  <i className="fa fa-fw fa-user"></i>Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
