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
      axios
        .post("/books/addbook", {
          Name: bookname,
          Author: author,
          Subject: subject,
        })
        .then((res) => {
          alert("book is added");
          window.location.href = "/books";
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("my_token");
          alert("Please login again to continue..");
          window.location.href = "/signin";
        });
    }
    setBookname("");
    setAuthor("");
    setSubject("");
  };
  return (
    <div className="card container cardhw">
      <div className="card-body">
        <h4>Add Book</h4>
        <form autoComplete="off" onSubmit={onSubmitForm} className="container">
          <div className="form-group">
            <label>Book Name</label>
            <input
              type="text"
              className="form-control"
              id="addbook"
              placeholder="Enter Book's Name"
              value={bookname}
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
              value={author}
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
              value={subject}
              onChange={onChangeSubject}
            />
          </div>
          <button type="submit" className="btn btn-success btn-block mt-4 mb-4">
            <i className="fa fa-fw fa-plus"></i>Add
          </button>
        </form>
      </div>
    </div>
  );
}
