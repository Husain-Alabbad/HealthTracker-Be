const express = require('express');

const router = express.Router();

// router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

// let methodOverride = require("method-override");
// router.use(methodOverride('_method'))

// Controller
const recordCtrl = require("../controllers/record");

// Routes
router.get("/record/add", recordCtrl.record_create_get);
router.post("/record/add", recordCtrl.record_create_post);
router.post("/record/index/one", recordCtrl.record_index_get_one);

router.get("/record/index", isLoggedIn,recordCtrl.record_index_get);
// router.get("/appointment/detail", appointmentCntrl.appointment_show_get);

router.get("/record/edit",isLoggedIn, recordCtrl.record_edit_get);
router.put("/record/update",isLoggedIn, recordCtrl.record_update_put);

router.delete("/record/delete",isLoggedIn, recordCtrl.record_delete_get);

module.exports = router;