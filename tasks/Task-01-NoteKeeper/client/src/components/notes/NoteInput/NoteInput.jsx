import { useState } from "react";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import styles from "./NoteInput.module.css";

const NoteInput = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setExpanded(false);
  };

  const handleSave = () => {
    if (title && content) {
      onSave({ title, content });
      handleCancel();
    } else {
      alert("Title and content are required");
    }
  };

  return (
    <div className={styles.noteInput}>
      {expanded ? (
        <>
          <Input
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title"
          />
          <Input
            label="Content"
            type="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Note content"
          />
          <div className={styles.actions}>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Done
            </Button>
          </div>
        </>
      ) : (
        <div className={styles.placeholder} onClick={() => setExpanded(true)}>
          + Add a new note
        </div>
      )}
    </div>
  );
};

export default NoteInput;
