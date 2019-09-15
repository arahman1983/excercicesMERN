import React from 'react';
import { Link } from "react-router-dom";

const NavBarComp = () => {
    
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <Link className="navbar-brand" to="/">
          <h3>Excercises</h3>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Excercises List{" "}
              </Link>
              </li><li className="nav-item">
              <Link className="nav-link" to="/create">
                Create Excercise{" "}
              </Link>
              </li><li className="nav-item">
              <Link className="nav-link" to="/users/add">
                Add user
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBarComp;
