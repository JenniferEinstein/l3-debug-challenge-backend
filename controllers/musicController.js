const express = require("express");
const music = express.Router();
const { getAllSongs, createSong, deleteSong } = require("../queries/music");

music.get("/", async (_req, res) => {

  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

music.post("/", async (req, res) => {

  const newSong = await createSongs(req.params);
  if (newSong.id) {
    res.status(200).json(newSong);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

music.delete("/:id", async (req, res) => {
 
  const deletedSong = await deleteSong(req.params.id);

  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "song not found" });
  }
});

module.exports = music;
