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

module.exports = {
  validateInfoNotEmpty
};
