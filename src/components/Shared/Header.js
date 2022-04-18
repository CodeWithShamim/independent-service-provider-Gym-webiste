import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
// import logo from "../../images/logo2.png";

const Header = () => {
  const [user] = useAuthState(auth);
  // console.log(user);

  // logut
  const logOut = () => {
    signOut(auth);
  };
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
                className="text-decoration-none fw-bold me-md-4 text-light"
                to="/"
              >
                Home
              </Link>

              <Link
                className="text-decoration-none fw-bold me-md-4 text-light"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="text-decoration-none fw-bold me-md-4 text-light"
                to="/about"
              >
                About
              </Link>

              {/* set dynamic taggle  */}
              {user ? (
                <Link
                  className="text-decoration-none fw-bold text-light"
                  to=""
                  onClick={logOut}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  className="text-decoration-none fw-bold text-light"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
