import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        sticky="top"
        className="py-4"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="fw-bold fs-4" as={Link} to="/">
            Eyun Fitness
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Link to="/service">Service</Link>
              <Link to="/about">About</Link> */}
            </Nav>
            <Nav>
              <Link
                className="text-decoration-none fw-bold text-light me-md-4"
                to="/"
              >
                Home
              </Link>

              <Link
                className="text-decoration-none fw-bold text-light me-md-4"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="text-decoration-none fw-bold text-light me-md-4"
                to="/about"
              >
                About
              </Link>
              <Link
                className="text-decoration-none fw-bold text-light"
                to="/login"
              >
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
