const express = require("express");
const cors = require("cors");
const musicController = require("./controllers/musicController");
const quoteController = require("./controllers/quoteController");
const app = express();


// middleware
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());

// ROUTES

app.use("/songs", musicController);
app.use("/quote", quoteController);
app.get("/", (_req, res) => {
  res.send("Welcome to the Debug Challenge");
});

// 404 PAGE
app.get("*", (_req, res) => {
  res.json({ error: "Page not found" });
});
// EXPORT
module.exports = app;
