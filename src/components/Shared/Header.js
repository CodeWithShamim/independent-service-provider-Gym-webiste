import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        className="py-3"
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
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="text-decoration-none fw-bold text-light"
                to="/about"
              >
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
