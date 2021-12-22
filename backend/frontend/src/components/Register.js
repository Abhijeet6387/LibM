import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="card container cardhw">
      <div className="card-body">
        <h4 className="text-center">Register </h4>
        <form autocomplete="off">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter Password"
              id="password"
              required
            />
          </div>
          <div className="form-group">
            <label>Contact</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Contact"
              required
            />
          </div>
          <small>
            Already have an account?
            <Link to="/signin">
              <b> Sign In</b>
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
