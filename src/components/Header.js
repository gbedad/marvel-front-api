import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/marvel-logo-34303.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo Marvel" />
        <nav>
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Characters
              </Link>
            </li>
            <li>
              <Link
                to="/comics"
                style={{ textDecoration: "none", color: "white" }}
              >
                Comics
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
