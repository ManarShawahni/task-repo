import { useState, useEffect } from "react";

const API_BASE = "/notes";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_BASE);
      if (!res.ok) throw new Error("Failed to fetch notes");
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error("Failed to fetch notes", err);
    } finally {
      setLoading(false);
    }
  };

  const createNote = async (note) => {
    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
      const newNote = await res.json();
      setNotes((prev) => [...prev, newNote]);
    } catch (err) {
      console.error("Failed to create note", err);
    }
  };

  const updateNote = async (note) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/${note._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });

      const updated = await res.json();
      setNotes((prev) =>
        prev.map((n) => (n._id === updated._id ? updated : n))
      );
    } catch (err) {
      console.error("Failed to update note", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete note");
      setNotes((prev) => prev.filter((n) => n._id !== id));
    } catch (err) {
      console.error("Failed to delete note", err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return { notes, loading, fetchNotes, createNote, updateNote, deleteNote };
};

export default useNotes;
