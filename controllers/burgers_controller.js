// Handles all routing requests. Call on burger.js to manage communication with the database

const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// Get database info in order to create webpage
router.get();

// add to the database and then update the page
router.post();

// Update a database
router.put();

module.exports = router;