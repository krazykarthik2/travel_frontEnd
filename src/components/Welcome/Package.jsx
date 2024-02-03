import React, { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";

function Package() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  const [people, setPeople] = useState(0);
  const [price, setPrice] = useState(45445);
  return (
    <div className="d-flex flex-column w-100 vh-100 justify-content-center align-items-center">
      <div
        className="d-flex card p-3 flex-column justify-content-center align-items-center gap-2"
        style={{ maxWidth: "600px", minWidth: "300px" }}
      >
        <div className="display-1">Tirumala</div>
        <div className="p text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          facere maxime temporibus error ab ipsa exercitationem, deserunt ipsam
          nisi voluptas minima pariatur iste debitis repudiandae porro illo
          cupiditate quae necessitatibus dolorum nostrum.
        </div>

        <Form onSubmit={handleSubmit} className="col-md-5 w-100">
          <div>cost per one:{price}</div>

          <Form.Group
            className="d-flex justify-content-center align-items-center"
            controlId="ControlInput1"
          >
            <Form.Label>no of people:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              style={{ width: "100px" }}
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
          </Form.Group>
          <div>total cost :{price * people}</div>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default Package;
