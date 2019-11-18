const express = require("express");
const router = express.Router();

// @route    Get api/contacts
// @desc     Get all users contacts
// @access   Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route    Post api/contact
// @desc     Add new contact
// @access   Public
router.post("/", (req, res) => {
  res.send("Add new contact");
});

// @route    Put api/contact/:id
// @desc     Update contact
// @access   Public
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route    Delete api/contact/:id
// @desc     Delete contact
// @access   Public
router.put("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
