const express = require('express');

const router = express.Router();

// router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

// let methodOverride = require("method-override");
// router.use(methodOverride('_method'))

// Controller
const appointmentCntrl = require("../controllers/appointment");

// Routes

router.get("/appointment/add", appointmentCntrl.appointment_create_get);
router.post("/appointment/add", appointmentCntrl.appointment_create_post);


router.get("/appointment/index",  appointmentCntrl.appointment_index_get);
router.post("/appointment/index/one", appointmentCntrl.appointment_index_get_one);
// router.get("/appointment/detail", appointmentCntrl.appointment_show_get);

router.get("/appointment/edit", isLoggedIn,appointmentCntrl.appointment_edit_get);
router.put("/appointment/update", isLoggedIn,appointmentCntrl.appointment_update_put);

router.delete("/appointment/delete", isLoggedIn,appointmentCntrl.appointment_delete_get);

module.exports = router;