import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ScheduleClass(props) {
  const [ownername, setOwnername] = useState("");
  const [contact, setContact] = useState("");
  const [issuedate, setIssuedate] = useState("");
  const [expdate, setExpdate] = useState("");
  const onChangeOwnername = (e) => {
    console.log(e.target.value);
    setOwnername(e.target.value);
  };
  const onChangeContact = (e) => {
    console.log(e.target.value);
    setContact(e.target.value);
  };
  const onChangeIssuedate = (e) => {
    console.log(e.target.value);
    setIssuedate(e.target.value);
  };
  const onChangeExpdate = (e) => {
    console.log(e.target.value);
    setExpdate(e.target.value);
  };

  const { id } = useParams();
  // console.log(id);
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(ownername);
    console.log(contact);
    console.log(issuedate);
    console.log(expdate);

    if (
      ownername === "" ||
      contact === "" ||
      issuedate === "" ||
      expdate === ""
    ) {
      alert("Please fill the details");
    } else {
      axios
        .post("/books/issuebook/" + id, {
          Ownername: ownername,
          Ownercontact: contact,
          Issuedate: issuedate,
          Expirydate: expdate,
        })
        .then((res) => {
          alert("book issued");
          setOwnername("");
          setContact("");
          setIssuedate("");
          setExpdate("");
          window.location.href = "/books";
        })
        .catch((err) => {
          console.log(err);
          alert("Please login again to continue..");
          window.location.href = "/signin";
        });
    }
  };
  return (
    <div>
      <div className="card container">
        <div className="card-body">
          <h4>Issue Book</h4>
          <form autoComplete="off" onSubmit={onSubmitForm}>
            <div className="form-group">
              <label>Owner's Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your name"
                onChange={onChangeOwnername}
              />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter contact number"
                onChange={onChangeContact}
              />
            </div>
            <div className="form-group">
              <label>Issue Date</label>
              <input
                className="form-control"
                type="date"
                onChange={onChangeIssuedate}
              />
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                className="form-control"
                type="date"
                onChange={onChangeExpdate}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success btn-sm float-right"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
