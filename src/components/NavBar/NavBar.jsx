import React from "react";
import "./navBar.css";
import { services__data } from "../Data__structure";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar__position">
        <a className="navbar-brand" href="#">
          Vidarbha Associates
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item dropdown">
              <div className="service__down">
                <a
                  className="nav-link dropdown-toggle nav__service"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <div
                  className="dropdown-menu service__drop-down"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {services__data.map(({ name, link }) => (
                    <a className="dropdown-item" href={link}>
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
