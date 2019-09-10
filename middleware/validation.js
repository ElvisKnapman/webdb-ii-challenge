const db = require("../data/db-config.js");

const validateInfoNotEmpty = (req, res, next) => {
  const { body } = req;

  if (!body.vinNumber || !body.make || !body.model || !body.mileage) {
    res.status(400).json({
      message: "VIN number, make, model and mileage must have a value"
    });
  } else if (typeof body.vinNumber !== "string") {
    res.status(400).json({ message: "VIN number must be a string" });
  } else if (typeof body.mileage !== "number") {
    res.status(400).json({ message: "Mileage must be a number" });
  } else {
    next();
  }
};

const validateVehicleID = async (req, res, next) => {
  const { id } = req.params;

  try {
    const car = await db("cars")
      .where({ id })
      .first();
    console.log("CAR IN VALIDATE ID:", car);
    if (car) {
      req.car = car;
      next();
    } else {
      res.status(404).json({ message: "Car ID does not exist" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Server could not validate vehicle by ID" });
  }
};

module.exports = {
  validateInfoNotEmpty,
  validateVehicleID
};
