import React from "react";
import user from "../images/user2.png";
export default function Home(props) {
  const handleLogout = () => {
    if (window.confirm("Are you sure?") === true) {
      localStorage.removeItem("my_token");
      alert("Logged Out!");
      window.location.href = "/home";
    }
  };
  return (
    <div className="card container">
      <h4 className="pt-4">Welcome to LibM, User!</h4>
      <div className="card-body row">
        <div className="col-md-5 col-lg-4">
          <img
            className="card-img-top"
            src={user}
            alt="user"
            style={{
              height: "200px",
              width: "auto",
              marginBottom: "10px",
              marginLeft: "40px",
            }}
          />
        </div>
        <div className="col-md-7 col-lg-8">
          <div className="row">
            <div className="col">
              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{ fontWeight: "bold" }}>
                  Name
                </li>
                <li className="list-group-item" style={{ fontWeight: "bold" }}>
                  Email
                </li>
                <li className="list-group-item" style={{ fontWeight: "bold" }}>
                  Role
                </li>
                <li className="list-group-item" style={{ fontWeight: "bold" }}>
                  Contact
                </li>
              </ul>
            </div>
            <div className="col">
              {props.userInfo && (
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    {props.userInfo.name}
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    {props.userInfo.email}
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    {props.userInfo.isPatron ? "Patron" : "Librarian"}
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    {props.userInfo.contact}
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="row ml-3 mt-3">
            <button
              className="btn btn-outline-success btn-block"
              type="button"
              style={{ borderRadius: "20px", borderColor: "green" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
