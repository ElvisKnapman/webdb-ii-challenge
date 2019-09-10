const express = require("express");

const server = express();

const carRoutes = require("../routes/carsRoutes.js");

server.use(express.json());
server.use("/api/cars", carRoutes);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API up" });
});

module.exports = server;
