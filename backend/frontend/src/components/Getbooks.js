import React, { useState, useEffect } from "react";
import moment from "moment";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Getbooks(props) {
  // console.log(props.userInfo);
  const [booklist, setBooklist] = useState([]);
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [ownername, setOwnerName] = useState("");
  const [expirydate, setExpiryDate] = useState("");
  const [availability, setAvailability] = useState(true);
  const [id, setId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);

  // function to open update modal
  const openModal = (singlebook) => {
    setId(singlebook._id);
    setBookname(singlebook.Name);
    setAuthor(singlebook.Author);
    setSubject(singlebook.Subject);
    setIsOpen(true);
  };
  // function to open view modal
  const openViewModal = (singlebook) => {
    setId(singlebook._id);
    setBookname(singlebook.Name);
    setAuthor(singlebook.Author);
    setSubject(singlebook.Subject);
    setAvailability(singlebook.Availability.toString());
    setIsViewOpen(true);
    setOwnerName(singlebook.Ownername);
    setExpiryDate(singlebook.Expirydate);
  };

  // function to close update modal
  const closeModal = () => setIsOpen(false);
  // function to close view modal
  const closeViewModal = () => setIsViewOpen(false);
  // functions to handle changes
  const onChangeBookname = (e) => {
    setBookname(e.target.value);
  };
  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  const onUpdateForm = (e) => {
    e.preventDefault();
    if (bookname === "" || author === "" || subject === "" || id === null) {
      alert("Please fill the details");
    } else {
      console.log(bookname, author, subject);
      axios
        .post("/updatebook/" + id, {
          Name: bookname,
          Author: author,
          Subject: subject,
        })
        .then((res) => {
          alert("Book Updated Successfully!");
          console.log(res.data);
          setBookname("");
          setAuthor("");
          setSubject("");
          setId(null);
          closeModal();
          getbooks();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getbooks();
  }, []);

  // function to get booklist
  const getbooks = () => {
    axios
      .get("/getbook")
      .then((res) => {
        // console.log("fetching");
        setBooklist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function to delete a book
  const handleDelete = (id) => {
    // if (props.userInfo.isPatron) {
    //   alert("You are not authorized to delete this book!");
    // }
    axios
      .delete("/deletebook/" + id)
      .then(() => {
        if (window.confirm("Are you sure?")) {
          alert("Book is Deleted Successfully!");
          getbooks();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="card container">
        <div className="card-body table-responsive ">
          {booklist.length === 0 ? (
            <p>Sorry, Books are currently unavailable !</p>
          ) : (
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-8">
                    <h4 className="float-left">Book List</h4>
                  </div>
                  <div className="col-sm-4">
                    <div className="search-box">
                      <i className="fa fa-wh fa-search"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ overflow: "auto", height: "400px" }}>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Author</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Availability</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="getbooks">
                    {booklist.map((singlebook, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{singlebook.Name}</td>
                        <td>{singlebook.Author}</td>
                        <td>{singlebook.Subject}</td>
                        <td>
                          {singlebook.Availability.toString() === "true" ? (
                            <i
                              className=" fa fa-wh fa-light fa-check-circle"
                              style={{ marginLeft: "25px" }}
                            ></i>
                          ) : (
                            <i
                              className="fa fa-wh fa-times"
                              style={{ marginLeft: "25px" }}
                            ></i>
                          )}
                        </td>
                        <td>
                          <div className="actions">
                            {!props.userInfo.isPatron ? (
                              <i
                                className="fa fa-fw fa-pencil"
                                onClick={() => openModal(singlebook)}
                                title="Update"
                              ></i>
                            ) : (
                              <i
                                className="fa fa-fw fa-pencil disabled"
                                title="Disabled"
                              ></i>
                            )}
                            {!props.userInfo.isPatron ? (
                              <i
                                className="fa fa-fw fa-trash"
                                onClick={() => handleDelete(singlebook._id)}
                                title="Delete"
                              ></i>
                            ) : (
                              <i
                                className="fa fa-fw fa-trash disabled"
                                title="Disabled"
                              ></i>
                            )}
                            <i
                              className="fa fa-wh fa-eye"
                              onClick={() => openViewModal(singlebook)}
                              title="View"
                            ></i>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <button
          type="button"
          className="btn btn-success"
          disabled={props.userInfo.isPatron ? true : false}
        >
          <Link
            className="addbook"
            to="/addbook"
            style={{ textDecoration: "none" }}
          >
            <i className="fa fa-fw fa-plus"></i>Add Book
          </Link>
        </button>
        <p className="text-muted" style={{ fontSize: "4px" }}>
          Click on the eye button in actions to view the details of the book and
          issue it!
        </p>
      </div>

      {/* Modal for update/edit book */}

      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header className="modalhead">
          <Modal.Title>Edit Book </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted">
            <small>Please fill up the changes to update!</small>
          </p>
          <form onSubmit={onUpdateForm} className="container">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={bookname}
                placeholder="Enter Name"
                onChange={onChangeBookname}
              />
            </div>
            <div className="form-group">
              <label>Author</label>
              <input
                type="text"
                className="form-control"
                value={author}
                placeholder="Enter Author's Name"
                onChange={onChangeAuthor}
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                className="form-control"
                value={subject}
                placeholder="Enter Subject"
                onChange={onChangeSubject}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-success btn-sm"
              style={{ float: "right" }}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={closeModal}
            >
              Close
            </button>
          </form>
        </Modal.Body>
      </Modal>

      {/* modal for view book */}
      <Modal show={isViewOpen} onHide={closeViewModal}>
        <Modal.Header className="modalhead">
          <Modal.Title>View Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row ml-5">
            <p className="col"> Name: {bookname}</p>
            <p className="col"> Subject: {subject}</p>
          </div>
          <div className="row ml-5">
            <p className="col"> Author: {author}</p>
            <p className="col">
              {availability === "true"
                ? "Availability: Yes"
                : "Availability: No"}
            </p>
          </div>
          <div className="row ml-5">
            <p className="col">
              {availability === "false"
                ? `Issued By: ${ownername}`
                : "Issued By: N/A"}
            </p>
            <p className="col">
              {availability === "false"
                ? `Issued Till: ${moment(expirydate).format("YYYY-MM-DD")}`
                : "Issued Till: N/A"}
            </p>
          </div>
          <button
            type="button"
            className="btn btn-success btn-sm float-right"
            disabled={availability === "false"}
          >
            <Link
              to={availability === "true" ? "/issuebook/" + id : ""}
              style={{ color: "white", textDecoration: "none" }}
            >
              Issue Book
            </Link>
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={closeViewModal}
          >
            Close
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
