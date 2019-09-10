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

router.post("/", validateInfoNotEmpty, async (req, res) => {
  const newCar = req.body;
  try {
    const [carID] = await db("cars").insert(newCar, "id");
    console.log("car ID", carID);
    const createdCar = await db("cars")
      .where({ id: carID })
      .first();
    res.status(201).json(createdCar);
  } catch (err) {
    res.status(500).json({ message: "Server could not add car to database" });
  }
});

router.delete("/:id", validateVehicleID, async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db("cars")
      .where({ id })
      .del();
    if (result) {
      return res
        .status(200)
        .json({ message: "Car was successfully deleted from the database" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server could not delete the car" });
  }
});

module.exports = router;
