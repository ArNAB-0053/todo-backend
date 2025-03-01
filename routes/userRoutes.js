const express = require("express");
const { getUserById, updateUserById } = require("../controllers/userController");

const router = express.Router();

router.get("/:id", getUserById);
router.put("/:id", updateUserById);

module.exports = router;
