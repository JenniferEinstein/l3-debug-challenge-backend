const express = require("express");
const cors = require("cors");
const musicController = require("./controllers/musicController");
const quoteController = require("./controllers/quoteController");
const app = express();


app.use("/songs", musicController);
app.use("/quote", quoteController);


app.use(cors());
app.use(express.json());



// ROUTES
app.get("/", (_req, res) => {
  res.send("Welcome to the Debug Challenge");
});

// 404 PAGE
app.get("*", (_req, res) => {
  res.json({ error: "Page not found" });
});
// EXPORT
module.exports = app;
