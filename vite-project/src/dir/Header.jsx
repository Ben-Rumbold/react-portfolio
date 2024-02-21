import { Link } from "react-router-dom";
import "../App.css";
import "./Header.css";

export default function Header({ currentPage }) {
  return (
    <header className="header">
      <div className="headings-container">
        <h1>Ben Rumbold</h1>
        <h2 className="yellow-text">Front-End Developer</h2>
      </div>
      <div className="nav-container">
        <Link to="/" className="nav-link">
          {currentPage === "home" ? (
            <span className="bullet-point">&#8226;</span>
          ) : (
            <h2>Home</h2>
          )}
        </Link>
        <Link className="nav-link" to="/Projects" id="center-nav-link">
          {currentPage === "projects" ? (
            <span className="bullet-point">&#8226;</span>
          ) : (
            <h2>Projects</h2>
          )}
        </Link>
        <Link className="nav-link" to="/Contact">
          {currentPage === "contact" ? (
            <span className="bullet-point">&#8226;</span>
          ) : (
            <h2>Contact</h2>
          )}
        </Link>
      </div>
    </header>
  );
}
