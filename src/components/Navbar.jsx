import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.module.css'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">LoL</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/Categories'>Categories</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to='/SignIn'>SignIn</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to='/SignUp'>SignUp</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
