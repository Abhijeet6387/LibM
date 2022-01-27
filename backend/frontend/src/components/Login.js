import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { validateEmail } from "../helpers/validation";

export default function Login(props) {
  const [user, setUser] = useState({ email: "", password: "" });
  const onChangeUser = (e) => {
    //  spread operator ...
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!validateEmail(user.email)) alert("Enter the valid email");
    else if (user.password === "") alert("Password cannot be empty");
    else {
      axios
        .post("/users/login", user)
        .then((res) => {
          alert(res.data.message);
          console.log(res.data);
          localStorage.setItem("my_token", res.data.token);
        })
        .catch((err) => {
          alert(err.message);
          console.log(err);
        })
        .finally(() => {
          setUser({ email: "", password: "" });
          window.location.href = "/home";
        });
    }
  };
  return (
    <div className="card container cardhw">
      <div className="card-body">
        <h4 className="text-center">Login</h4>
        <form autocomplete="off" onSubmit={onSubmitForm}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={user.email}
              name="email"
              onChange={onChangeUser}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={user.password}
              onChange={onChangeUser}
              required
            />
          </div>
          <small>
            Don't have a account yet?
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <b> Sign Up</b>
            </Link>
          </small>
          <br />
          <button type="submit" className="btn btn-success btn-sm float-right">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
