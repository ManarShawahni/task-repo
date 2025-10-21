import { useState, useEffect } from "react";
import Dialog from "../../common/Dialog/Dialog";
import Input from "../../common/Input/Input";

const NoteDialog = ({ note, onCancel, onSave }) => {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  //   useEffect(() => {
  //     setTitle(note?.title || "");
  //     setContent(note?.content || "");
  //   }, [note]);

  const handleSave = () => {
    if (!title || !content) {
      alert("Title and content are required");
      return;
    }
    onSave({ ...note, title, content });
  };

  return (
    <Dialog title="Edit Note" onCancel={onCancel} onConfirm={handleSave}>
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
    </Dialog>
  );
};

export default NoteDialog;
