import React from "react";
import { Button, NavLink, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaArrowRightLong,
  FaBuyNLarge,
  FaBuysellads,
} from "react-icons/fa6";
import Card from "../Card/Card";
import { SiBuymeacoffee } from "react-icons/si";
function Welcome() {
  return (
    <div
      className="d-flex w-100 vh-100 flex-column align-items-center justify-content-between
    "
    >
      <Navbar fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className="hstack gap-3">
            <NavLink to="/auth/login">Login</NavLink>
            <NavLink to="/auth/signup">Signup</NavLink>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <div className="h-100 d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <Link
            to={"/explore"}
            variant="primary mb-4"
            className=" btn btn-primary rounded-pill gap-2 d-flex align-items-center justify-content-center"
          >
            <span>Explore</span>
            <FaArrowRight />
          </Link>{" "}
          <Link
            to={"/mylist"}
            variant="primary mb-4"
            className=" btn btn-primary rounded-pill gap-2 d-flex align-items-center justify-content-center"
          >
            <span>My List</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
      <footer className="">
        contact:goparajukarthik2@gmail.com for project queries
        <br />
        <Link
          to="https://www.buymeacoffee.com/karthikkrazy"
        >
            <SiBuymeacoffee />
          Buy me a cofee
        </Link>
      </footer>
    </div>
  );
}

export default Welcome;
