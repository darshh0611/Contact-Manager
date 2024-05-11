const express = require("express");
const router = express.Router();
const {getContacts} = require('../controllers/contactControllers');
const {createContact} = require('../controllers/contactControllers');
const {getContact} = require('../controllers/contactControllers');
const {updateContact} = require('../controllers/contactControllers');
const {deleteContact} = require('../controllers/contactControllers');
const valdiateToken = require("../middleware/validateTokenHandler");

router.use(valdiateToken);

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;