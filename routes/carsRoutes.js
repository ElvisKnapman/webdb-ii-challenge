const express = require("express");

const router = express.Router();

const db = require("../data/db-config.js");

router.get("/", async (req, res) => {
  try {
    const results = await db("car-dealer");
    res.status(200).json(results);
  } catch (err) {
    res.status(500).status({ error: "Server couldn't retrieve vehicles" });
  }
});

module.exports = router;
