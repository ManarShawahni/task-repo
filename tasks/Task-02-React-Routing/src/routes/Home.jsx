import { Link, useLocation } from "react-router-dom";
import { contacts } from "../data/contacts";
import Card from "../components/Card";

export default function Home() {
  const location = useLocation(); //url curr location
  const sort = new URLSearchParams(location.search).get("sort"); // "asc" or "desc"

  //sortig contacts based on query param.
  const sortedContacts = [...contacts].sort((a, b) => {
    if (sort === "asc") return a.title.localeCompare(b.title);
    if (sort === "desc") return b.title.localeCompare(a.title);
    return 0; // the default
  });
  return (
    <div>
      <h2>Home Page</h2>
      {sortedContacts.map((contact, index) => (
        <Link
          key={index}
          to={`contact/${encodeURIComponent(contact.title)}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card
            key={index}
            title={contact.title}
            description={contact.description}
          />
        </Link>
      ))}
    </div>
  );
}
