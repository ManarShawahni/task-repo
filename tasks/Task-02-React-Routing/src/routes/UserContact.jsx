import { useParams } from "react-router-dom";
import { contacts } from "../data/contacts";
import { useState, useEffect } from "react";

export default function UserContact() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (name) {
      const decodedName = decodeURIComponent(name);
      const found = contacts.find((c) => c.title === decodedName);

      setTimeout(() => {
        setContact(found);
        setLoading(false);
      }, 500);
    } else {
      setLoading(false);
    }
  }, [name]);

  if (loading) return <p>Loading...</p>;

  if (name) {
    if (!contact) {
      return (
        <div>
          <h2>Contact Not Found</h2>
          <p>No profile available for "{decodeURIComponent(name)}".</p>{" "}
        </div>
      );
    }

    return (
      <div>
        <h2>Contact Profile</h2> {/*contact/Manar Imad*/}
        <h3>{contact.title}</h3>
        <p>{contact.description}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: manar@gmail.com</p>
    </div>
  );
}
