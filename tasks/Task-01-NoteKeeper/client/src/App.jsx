import { useState } from "react";
import NoteInput from "./components/notes/NoteInput/NoteInput";
import NoteList from "./components/notes/NoteList/NoteList";
import NoteDialog from "./components/notes/NoteDialog/NoteDialog";
import useNotes from "./hooks/useNotes";
import "./App.module.css";

function App() {
  const { notes, createNote, updateNote, deleteNote, loading } = useNotes();
  const [editingNote, setEditingNote] = useState(null);
  const [showDelete, setShowDelete] = useState(null);

  const handleEdit = (note) => setEditingNote(note);
  const handleCancelEdit = () => setEditingNote(null);

  const handleDelete = (note) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(note._id);
    }
  };

  return (
    <div className="App">
      <h1>My Note Keeper</h1>
      <NoteInput onSave={createNote} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <NoteList notes={notes} onEdit={handleEdit} onDelete={handleDelete} />
      )}
      {editingNote && (
        <NoteDialog
          note={editingNote}
          onCancel={handleCancelEdit}
          onSave={(note) => {
            updateNote(note);
            handleCancelEdit();
          }}
        />
      )}
    </div>
  );
}

export default App;
