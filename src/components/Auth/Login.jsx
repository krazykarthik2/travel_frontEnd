import React, { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("email", email, "password", password);
    if (true) {
      //login is successful
      navigate("/welcome");
    }
  }
  return (
    <div className="d-flex w-100 vh-100 flex-column align-items-center justify-content-center">
      <div className="card w-100 p-3" style={{ maxWidth: "600px" }}>
        <h1>Log In</h1>
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
                autoComplete="email"
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
                autoComplete="current-password"
              />
            </Form.Group>
            <div>
              <Form.Text>
                Don't have an account? <Link to="/auth/signup">Sign Up</Link>
              </Form.Text>
            </div>
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Form>
        </Stack>
      </div>
    </div>
  );
}

export default Login;
