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
          <div className="form-check">
            <label
              className="form-check-label float-right"
              for="flexCheckDefault"
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                defaultChecked="true"
              />
              Are you a Patron ?
            </label>
          </div>
          <div className="form-group mt-4">
            <label>Contact</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Contact"
              required
            />
          </div>
          <div>
            <small>
              Already have an account?
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <b> Sign In</b>
              </Link>
            </small>
            <button
              type="submit"
              className="btn btn-success btn-sm float-right"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
