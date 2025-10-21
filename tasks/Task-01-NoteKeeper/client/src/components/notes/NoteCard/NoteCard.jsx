import styles from "./NoteCard.module.css";
import Button from "../../common/Button/Button";

const NoteCard = ({ note, onClick, onDelete }) => {
  return (
    <div className={styles.card} onClick={() => onClick(note)}>
      <h4>{note.title}</h4>
      <p>{note.content}</p>
      <small>{new Date(note.createdAt).toLocaleString()}</small>
      <div
        className={styles.deleteIcon}
        onClick={(e) => {
          e.stopPropagation();
          onDelete(note);
        }}
      >
        🗑️
      </div>
    </div>
  );
};

export default NoteCard;
