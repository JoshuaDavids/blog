import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import ContactContext from "../../context/contact/contactContext";
import "./Navbar.css";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <h1>{title}</h1>
          </div>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about-me">About</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/contact">Contact</Link>
            <Link className="text" onClick={onLogout} to="/login">
              <i className="fas fa-sign-out-alt"></i>
              <span className="text">Logout</span>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <h1>{title}</h1>
          </div>
          <li className="links">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </li>
        </div>
      </nav>
    </Fragment>
  );

  return (
    <div>
      <div className="nav">
        <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "JOSHUA",
};

export default Navbar;
