import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav style={{ background: "#f8f9fa", padding: "10px" }}>
      <img
        src={logo}
        alt="Logo"
        width="40"
        style={{ verticalAlign: "middle" }}
      />
      <Link to="/" style={{ margin: "0 10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "0 10px" }}>
        About
      </Link>
      <Link to="/contact" style={{ margin: "0 10px" }}>
        Contact
      </Link>
    </nav>
  );
}
