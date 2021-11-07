import React, { useState } from "react";
import axios from "axios";

export default function Books() {
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");

  const onChangeBookName = (e) => {
    setBookname(e.target.value);
  };
  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (bookname === "" || author === "" || subject === "") {
      alert("Please fill the details");
    } else {
      console.log(bookname, author, subject);
      axios
        .post("/addbook", {
          Name: bookname,
          Author: author,
          Subject: subject,
        })
        .then((res) => {
          alert("book added");
          console.log(res.data);
          setBookname("");
          setAuthor("");
          setSubject("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <b>Add Book</b>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmitForm} className="container">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="addbook"
                placeholder="Enter Name"
                onChange={onChangeBookName}
              />
            </div>
            <div className="form-group">
              <label>Author</label>
              <input
                type="text"
                className="form-control"
                id="addauthor"
                placeholder="Enter Author's Name"
                onChange={onChangeAuthor}
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                className="form-control"
                id="addsubject"
                placeholder="Enter Subject"
                onChange={onChangeSubject}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
