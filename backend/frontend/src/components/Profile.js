import React from "react";

export default function Home(props) {
  return (
    <div className="card container">
      <div className="card-body">
        <h4>Welcome to LibM, User!</h4>
        {props.userInfo && (
          <ul>
            <li>Name: {props.userInfo.name} </li>
            <li>Email:{props.userInfo.email}</li>
            <li>Role: {props.userInfo.isPatron ? "Patron" : "Librarian"}</li>
            <li>Contact: {props.userInfo.contact} </li>
          </ul>
        )}
      </div>
    </div>
  );
}
