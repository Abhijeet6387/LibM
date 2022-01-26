import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isPatron, setIsPatron] = useState(true);
  const [contact, setContact] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePass = (e) => {
    setPass(e.target.value);
  };
  const onChangeIsPatron = (e) => {
    setIsPatron(e.target.value);
  };
  const onChangeContact = (e) => {
    setContact(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || pass === "" || contact === "") {
      alert("Please fill the details");
    } else {
      axios
        .post("/users/register", {
          name: name,
          email: email,
          password: pass,
          isPatron: isPatron,
          contact: contact,
        })
        .then((res) => {
          alert("User added successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setName("");
    setEmail("");
    setPass("");
    setIsPatron(true);
    setContact("");
  };
  return (
    <div className="card container cardhw">
      <div className="card-body">
        <h4 className="text-center">Register </h4>
        <form autocomplete="off" onSubmit={onSubmitForm}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={onChangeEmail}
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
              value={pass}
              onChange={onChangePass}
              required
            />
          </div>
          <div className="form-check">
            <label className="form-check-label float-right" for="checkpatron">
              <input
                className="form-check-input"
                type="checkbox"
                value={isPatron}
                onChange={onChangeIsPatron}
                id="checkpatron"
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
              value={contact}
              onChange={onChangeContact}
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
