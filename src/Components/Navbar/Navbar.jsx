import React, { useContext } from "react";
import styles from "./Navbar.module.scss";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/images/freshcart-logo.svg";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

export default function NavBar() {
  const { token, setToken } = useContext(AuthContext);
  const { numOfCartItems } = useContext(CartContext);

  function handleLogout() {
    setToken(null);
    localStorage.removeItem("token");
  }

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-secondary position-fixed w-100 rounded-bottom-4 bg-gradient z-3"
      >
        <Container>
          <Link to="/">
            <figure className="m-0">
              <img src={logo} alt="" />
            </figure>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {token && (
            <Navbar.Collapse id="basic-navbar-nav" className="py-3">
              <Nav className="me-auto ms-3">
                <NavLink
                  to="/"
                  className={(x) =>
                    x.isActive
                      ? `${styles.active} text-decoration-none mx-2 fw-semibold`
                      : "text-decoration-none text-dark-emphasis mx-2 fw-semibold"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="Products"
                  className={(x) =>
                    x.isActive
                      ? `${styles.active} text-decoration-none mx-2 fw-semibold`
                      : "text-decoration-none text-dark-emphasis mx-2 fw-semibold"
                  }
                >
                  Products
                </NavLink>

                <NavLink
                  to="Categories"
                  className={(x) =>
                    x.isActive
                      ? `${styles.active} text-decoration-none mx-2 fw-semibold`
                      : "text-decoration-none text-dark-emphasis mx-2 fw-semibold"
                  }
                >
                  Categories
                </NavLink>

                <NavLink
                  to="Brands"
                  className={(x) =>
                    x.isActive
                      ? `${styles.active} text-decoration-none mx-2 fw-semibold`
                      : "text-decoration-none text-dark-emphasis mx-2 fw-semibold"
                  }
                >
                  Brands
                </NavLink>

                <NavLink
                  to="Wishlist"
                  className={(x) =>
                    x.isActive
                      ? `${styles.active} text-decoration-none mx-2 fw-semibold`
                      : "text-decoration-none text-dark-emphasis mx-2 fw-semibold"
                  }
                >
                  Wishlist
                </NavLink>

                <NavLink
                  to="Cart"
                  className={(x) =>
                    x.isActive
                      ? `${styles.active} text-decoration-none mx-2 fw-semibold position-relative`
                      : "text-decoration-none text-dark-emphasis mx-2 fw-semibold position-relative"
                  }
                >
                  Cart <i className="fa fa-shopping-cart"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-main">
                    {numOfCartItems}
                  </span>
                </NavLink>

                <NavLink
                  to="allOrders"
                  className={(x) =>
                    x.isActive
                      ? `${styles.active} text-decoration-none mx-2 fw-semibold position-relative`
                      : "text-decoration-none text-dark-emphasis mx-2 fw-semibold position-relative"
                  }
                >
                  Orders
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          )}

          <Navbar.Collapse className="py-3">
            <Nav className="ms-auto">
              {!token ? (
                <>
                  <NavLink
                    to="Login"
                    className={(x) =>
                      x.isActive
                        ? `${styles.active} text-decoration-none mx-2 fw-semibold`
                        : "text-decoration-none text-dark-emphasis mx-2 fw-semibold"
                    }
                  >
                    Login
                  </NavLink>

                  <NavLink
                    id="link"
                    to="Register"
                    className={(x) =>
                      x.isActive
                        ? `${styles.active} text-decoration-none mx-2 fw-semibold`
                        : "text-decoration-none text-dark-emphasis mx-2 fw-semibold"
                    }
                  >
                    Signup
                  </NavLink>
                </>
              ) : (
                <Link
                  to="Login"
                  onClick={handleLogout}
                  className="text-decoration-none text-dark-emphasis mx-2 fw-semibold"
                >
                  Logout <i className="fa fa-sign-out"></i>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
