import React from "react";
import { Form } from "react-bootstrap";

const Forms = (props) => {
  const { handleBook } = props;
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            onChange={handleBook}
            placeholder="Enter Book title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book author </Form.Label>
          <Form.Control
            name="author"
            type="text"
            onChange={handleBook}
            placeholder="Enter Book author"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book image </Form.Label>
          <Form.Control
            name="img"
            type="text"
            onChange={handleBook}
            placeholder="Enter Book poster"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Price </Form.Label>
          <Form.Control
            name="price"
            type="number"
            onChange={handleBook}
            placeholder="Enter Book price"
          />
        </Form.Group>

        <Form.Label>Select a Book Genre</Form.Label>
        <Form.Control as="select" multiple name="genre">
          <option>Action</option>
          <option>comedy</option>
          <option>biography</option>
          <option>horreur</option>
          <option>Adventure</option>
          <option>Fantasy</option>
          <option>Romance</option>
        </Form.Control>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Book description</Form.Label>
          <Form.Control as="textarea" rows={2} name="description" />
        </Form.Group>
      </Form>
    </div>
  );
};
export default Forms;
