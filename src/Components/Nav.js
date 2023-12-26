import React from "react";
// import Signup from "./Signup";
import "./Css/Nav.css";

export default function Nav({ scrollToFooter }) {
  return (
    <div className="d1">
      <nav className="navbar navbar-expand-lg bg-body-tertiary align-items-center">
        <div className="container-fluid">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30 "
            height="27"
            fill="currentColor"
            className="bi bi-backpack"
            viewBox="0 0 16 16"
          >
            <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
            <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6.002 6.002 0 0 1 4-5.659M7 2v.083a6.04 6.04 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5" />
          </svg>
          <b type="btn" className="title" href="/">
            Travelio
          </b>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* <div className='navbar-content'> */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {/* <b>Home</b> */}
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  {/* <b>Attractions</b> */}
                  Attractions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/forts">
                  {/* <b>Forts</b> */}
                  Forts
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  onClick={scrollToFooter}
                >
                  {/* <b>About Us</b> */}
                  About Us
                </a>
              </li>
            </ul>
            <a className="btn btn-success" href="/Signup">
              <b>Register</b>
            </a>

            {/* </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
