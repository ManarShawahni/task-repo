import { useLocation } from "react-router-dom";
import Card from "../components/Card";

export default function Home() {
  const location = useLocation(); //url curr location
  const sort = new URLSearchParams(location.search).get("sort"); // "asc" or "desc"

  const contacts = [
    { title: "Manar Imad", description: "Frontend Developer - in progress" },
    { title: "Omar Alhasan", description: "Frontend Developer" },
    { title: "Taha Hammouz", description: "Frontend Developer" },
  ];

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
        <Card
          key={index}
          title={contact.title}
          description={contact.description}
        />
      ))}
    </div>
  );
}
