import React from "react";

export default function Footer() {
  return (
    <>
      <div className="foot">
        <div className="container-fluid">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0">
              &copy; 2021 LIBm, All Rights Reserved
            </p>
            <ul className="nav col-md-4 justify-content-end">
              <li className="nav-item hover-link">
                <a href="/" className="nav-link px-2">
                  About
                </a>
              </li>
              <li className="nav-item hover-link">
                <a href="/" className="nav-link px-2">
                  Features
                </a>
              </li>
              <li className="nav-item hover-link">
                <a href="/" className="nav-link px-2">
                  FAQs
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}
