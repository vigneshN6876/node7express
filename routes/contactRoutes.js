const express = require("express")
const router = express.Router();
const { getContact , postContact , updateContact , deleteContact , getContactid} = require("../Controllers/contactController")
router.route("/").get(getContact)
router.route("/").post(postContact)
router.route("/:id").put(updateContact)
router.route("/:id").delete(deleteContact)
router.route("/:id").get(getContactid)
module.exports = router