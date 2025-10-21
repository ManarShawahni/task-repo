const express = require("express");
const router = express.Router();
const controller = require("../controllers/noteController");

router.get("/", controller.getAllNotes);
router.get("/search", controller.searchNotes);
router.post("/", controller.createNote);
router.put("/:id", controller.updateNote);
router.delete("/:id", controller.deleteNote);

module.exports = router;
