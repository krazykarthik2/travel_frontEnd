import React from "react";
import { Button, NavLink, Navbar, Stack } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-100 vh-100 vstack justify-content-between">
      <Navbar fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Stack gap={2} direction="horizontal">
            <button className="nav-link outline-0 border-0 bg-transparent">
              Details
            </button>
            <button className="nav-link outline-0 border-0 bg-transparent">
              Logout
            </button>
          </Stack>
        </Navbar.Collapse>
      </Navbar>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        {" "}
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
          target="_blank"
        >
          <SiBuymeacoffee />
          Buy me a cofee
        </Link>
      </footer>
    </div>
  );
}

export default Home;
