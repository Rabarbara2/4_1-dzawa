"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here
app.get("/math/circle/:r", (req, res) => {
  const { r } = req.params;

  // check for required parameters
  if (!r) {
    const missingParams = [];
    if (!r) {
      missingParams.push("r");
    }
    const errorMessage = `Missing Required GET parameters: ${missingParams.join(
      ", "
    )}`;
    return res.status(400).send(errorMessage);
  }

  // send greeting
  const message = `area:${3.1415 * r * r}, circumference ${2 * 3.1415 * r}`;
  res.type("text").send(message);
  res.json(result);
});

//TODO2
// define endpoint for exercise 1 here
app.get("/math/rectangle/:width/:height", (req, res) => {
  const { width, height } = req.params;

  // check for required parameters
  if (!width || !height) {
    const missingParams = [];
    if (!width) {
      missingParams.push("w");
    }
    if (!height) {
      missingParams.push("h");
    }
    const errorMessage = `Missing Required GET parameters: ${missingParams.join(
      ", "
    )}`;
    return res.status(400).send(errorMessage);
  }

  // send greeting
  const message = `area:${width * height}, circumference ${
    2 * width + 2 * height
  }`;
  res.type("text").send(message);
  res.json(result);
});

//TODO3

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
