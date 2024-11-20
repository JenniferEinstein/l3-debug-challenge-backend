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

  const newSong = await createSong(req.body);
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


/*

If I also want to improve error handling and add try catch blocks...

const express = require("express");
const music = express.Router();
const { getAllSongs, createSong, deleteSong } = require("../queries/music");

music.get("/", async (_req, res) => {
  try {
    const allSongs = await getAllSongs();
    if (allSongs.length > 0) {
      res.status(200).json(allSongs);
    } else {
      res.status(404).json({ error: "No songs found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

music.post("/", async (req, res) => {
  try {
    const newSong = await createSong(req.body);
    if (newSong && newSong.id) {
      res.status(200).json(newSong);
    } else {
      res.status(400).json({ error: "Invalid song data" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

music.delete("/:id", async (req, res) => {
  try {
    const deletedSong = await deleteSong(req.params.id);
    if (deletedSong && deletedSong.id) {
      res.status(200).json(deletedSong);
    } else {
      res.status(404).json({ error: "Song not found or already deleted" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = music;

*/
