import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo from "../../images/logo2.png";

const Header = () => {
  return (
    <>
      <Navbar
        sticky="top"
        style={{ height: "90px" }}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="fw-bold fs-4" as={Link} to="/">
            {/* <img data-aos="fade-in" className="w-75" src={logo} alt="Logo" /> */}
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
                style={{ color: "#00BEF2" }}
                className="text-decoration-none fw-bold me-md-4"
                to="/"
              >
                Home
              </Link>

              <Link
                style={{ color: "#00BEF2" }}
                className="text-decoration-none fw-bold me-md-4"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                style={{ color: "#00BEF2" }}
                className="text-decoration-none fw-bold me-md-4"
                to="/about"
              >
                About
              </Link>
              <Link
                style={{ color: "#00BEF2" }}
                className="text-decoration-none fw-bold"
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
