import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const location = useLocation(); // current URL

  const links = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Contact", to: "/contact" },
    { title: "Sort Asc", to: "/?sort=asc", query: "asc" },
    { title: "Sort Desc", to: "/?sort=desc", query: "desc" },
  ];

  //Updated links to use NavLink
  const linkStyle = ({ isActive }, link) => {
    const sortParam = new URLSearchParams(location.search).get("sort");
    const isSortActive = link.query && sortParam === link.query;
    const active = link.query ? isSortActive : isActive;

    return {
      margin: "0 15px",
      fontWeight: active ? "bold" : "normal",
      color: active ? "blue" : "black",
      textDecoration: "none",
    };
  };

  return (
    <nav
      style={{
        background: "#f8f9fa",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        width="40"
        style={{ verticalAlign: "middle" }}
      />
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          style={(props) => linkStyle(props, link)}
          end={!link.query}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
}
