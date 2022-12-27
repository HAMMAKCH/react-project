import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Forms from "./Forms";
// import Forms from './Forms';

const AddBooks = ({ handleClose, show,AjouterNewBook }) => {
  //const { handleNewBook } = props;

  //const [show, setShow] = useState(false);
  const [Book, setBook] = useState({
    id: "",
    title: "",
    author: "",
    price: 0,
    img: "",
  });
  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  const handleBook = (event) => {
    setBook({ ...Book, [event.target.name]: event.target.value });
  };
  console.log(handleBook);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Book </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Forms handleBook={handleBook}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              AjouterNewBook(Book)
              handleClose();
            }}
          >
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBooks;
