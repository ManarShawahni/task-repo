const Note = require("../models/Note");

// GET /notes
exports.getAllNotes = async (req, res, next) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};

// GET /notes/search
exports.searchNotes = async (req, res) => {
  try {
    const { query } = req.query;
    const notes = await Note.find({
      $or: [
        { title: new RegExp(query, "i") },
        { content: new RegExp(query, "i") },
      ],
    });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
};

// POST /notes
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) throw new Error("Title and Content are required");
    const newNote = new Note({ title, content });
    const saved = await newNote.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /notes/:id
exports.updateNote = async (req, res) => {
  try {
    const updated = await Note.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, content: req.body.content },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Note not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Failed to update note" });
  }
};

// DELETE /notes/:id
exports.deleteNote = async (req, res) => {
  try {
    const deleted = await Note.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Note not found" });
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete note" });
  }
};
