const express = require("express");
const quote = express.Router();
const axios = require("axios");

quote.get("/", async (_req, res) => {
    try {
        const response = await axios("https://zenquotes.io/api/random");
        const quote = response.data[0];

        res.status(200).json({ text: quote.q, author: quote.a });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch random quote" });
    }
});

module.exports = quote;