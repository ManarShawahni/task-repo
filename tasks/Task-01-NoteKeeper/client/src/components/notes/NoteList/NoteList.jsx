import NoteCard from "../NoteCard/NoteCard";
import styles from "./NoteList.module.css";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className={styles.listContainer}>
      {notes.length === 0 ? (
        <p className={styles.emptyMessage}>No notes found.</p>
      ) : (
        notes.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
            onClick={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
