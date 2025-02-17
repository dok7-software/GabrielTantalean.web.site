import Link from "next/link";
import React from "react";

// TODO: Identificar si es mobile para mejorar listado
const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary col-md-4 col-lg-4 d-md-block sidebar fixed-top">
      <div className="container-fluid d-flex flex-column align-items-start pt-3">
        <Link className="navbar-brand mb-3" href="/">
          Gabriel Tantalean
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-3 flex-column">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/info" className="nav-link">
                Info
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/social" className="nav-link">
                Social Media
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
