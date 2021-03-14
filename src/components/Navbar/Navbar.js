import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navBarNav, setNavBarNav] = useState(-100);
  const showHideNav = () => {
    if (navBarNav === 0) {
      setNavBarNav(-100);
    } else if (navBarNav === -100) {
      setNavBarNav(0);
    }
  };
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h1>Chintu Bot</h1>
        </Link>
        <div className="toggle" onClick={showHideNav}>
          <i className="fas fa-bars"></i>
        </div>
        <div
          className="navbar-nav"
          style={{ left: `${navBarNav}%` }}
          onClick={showHideNav}
        >
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/commands" className="nav-item">
            Commands
          </Link>
          <a
            href="https://discord.gg/RtPpj5w4C5"
            target="blank"
            className="nav-item"
          >
            <span className="joindiscord">Join Discord</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
