import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="card container cardhw">
      <div className="card-body">
        <h4 className="text-center">Login</h4>
        <form autocomplete="off">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter Password"
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
