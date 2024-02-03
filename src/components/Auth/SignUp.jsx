import React, { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("email", email, "password", password);

    if (true) {
      //signup is successful
      navigate("/welcome");
    }
  }
  return (
    <div className="d-flex w-100 vh-100 flex-column align-items-center justify-content-center">
      <div className="card w-100 p-3" style={{ maxWidth: "600px" }}>
        <h1>Sign Up</h1>
        <Stack gap={2} className="col-md-5 w-100">
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3 vstack align-items-start"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 vstack align-items-start"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div>
              <Form.Text>
                Already have an account? <Link to="/auth/login">Login</Link>
              </Form.Text>
            </div>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Stack>
      </div>
    </div>
  );
}

export default SignUp;
