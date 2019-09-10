const express = require("express");

const router = express.Router();

const db = require("../data/db-config.js");

// middleware
const {
  validateInfoNotEmpty,
  validateVehicleID
} = require("../middleware/validation.js");

router.get("/", async (req, res) => {
  try {
    const results = await db("cars");
    res.status(200).json(results);
  } catch (err) {
    res.status(500).status({ error: "Server couldn't retrieve vehicles" });
  }
});

router.get("/:id", validateVehicleID, (req, res) => {
  const { car } = req;
  res.status(200).json(car);
});

module.exports = router;
