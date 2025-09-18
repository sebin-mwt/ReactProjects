import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white h-50">
      <div className="container-fluid ms-3">
        <a className="navbar-brand" href="#">
          <i className="fa-solid fa-book fa-beat" style={{color: "#74C0FC"}}></i> ELearning
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" href="#">HOME</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">ABOUT</a></li>
            <li className="nav-item"><a className="nav-link" href="#course">COURSES</a></li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PAGES
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#instructor">Our Team</a></li>
                <li><a className="dropdown-item" href="#">Testimonial</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#category">Categories</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="#footer">CONTACT</a></li>
          </ul>

          <div className="d-flex">
            <Link
              to="/login"
              className="btn btn-info px-4 py-2"
              style={{color: "white", minWidth: "160px", textAlign: "center"}}
            >
              Login / Join Now <i className="fa-solid fa-arrow-right fa-beat-fade" style={{color: "#f3f3f3"}}></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
