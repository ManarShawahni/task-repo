import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  //Updated links to use NavLink
  const linkStyle = ({ isActive }) => ({
    margin: "0 10px",
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "blue" : "black",
    textDecoration: "none",
  });

  return (
    <nav style={{ background: "#f8f9fa", padding: "10px" }}>
      <img
        src={logo}
        alt="Logo"
        width="40"
        style={{ verticalAlign: "middle" }}
      />
      <NavLink to="/" style={{ linkStyle }}>
        Home
      </NavLink>
      <NavLink to="/about" style={{ linkStyle }}>
        About
      </NavLink>
      <NavLink to="/contact" style={{ linkStyle }}>
        Contact
      </NavLink>
    </nav>
  );
}
