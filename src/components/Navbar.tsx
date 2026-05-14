import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="logo">
          ThuHang
        </NavLink>

        <nav className="nav-menu">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/projects">Projects</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;