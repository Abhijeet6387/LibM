import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

export default function Getbooks() {
  //jhj
  // hard-coded data
  // const booklist = [
  //   {
  //     Name: "xyz",
  //     Author: "xyz",
  //     Subject: "xyz",
  //     Availability: "true",
  //   },
  //   {
  //     Name: "xyz",
  //     Author: "xyz",
  //     Subject: "xyz",
  //     Availability: "true",
  //   },
  //   {
  //     Name: "xyz",
  //     Author: "xyz",
  //     Subject: "xyz",
  //     Availability: "true",
  //   },
  //   {
  //     Name: "xyz",
  //     Author: "xyz",
  //     Subject: "xyz",
  //     Availability: "true",
  //   },
  // ];

  const [booklist, setBooklist] = useState([]);

  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");

  const [id, setId] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = (singlebook) => {
    setId(singlebook._id);
    setBookname(singlebook.Name);
    setAuthor(singlebook.Author);
    setSubject(singlebook.Subject);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

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
          alert("book updated");
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

  const handleDelete = (id) => {
    axios
      .delete("/deletebook/" + id)
      .then((res) => {
        console.log(res);
        alert("Delete this book ?");
        getbooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <h4>List Of Books</h4>
          <div className="card-body table-responsive">
            {booklist.length === 0 ? (
              <div>No books available</div>
            ) : (
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Sno</th>
                    <th scope="col">Name</th>
                    <th scope="col">Author's Name</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Availability</th>
                    <th>Delete</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  {booklist.map((singlebook, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{singlebook.Name}</td>
                      <td>{singlebook.Author}</td>
                      <td>{singlebook.Subject}</td>
                      <td>
                        {singlebook.Availability.toString() === "true"
                          ? "Available"
                          : "Not Available"}
                      </td>
                      <td>
                        <button onClick={() => handleDelete(singlebook._id)}>
                          Delete
                        </button>
                      </td>
                      <td>
                        <button onClick={() => openModal(singlebook)}>
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
