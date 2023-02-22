// Requiring express module
const express = require('express');

// Requiring express router
const router = express.Router();

// Router using express RESTfully
router.use(express.json());

// Requiring method override module 
// let methodOverRide = require('method-override');

// Router using method override module
// router.use(methodOverRide('_method'));

// Requiring isLoggedIn functionality
const isLoggedIn = require("../helper/isLoggedIn");

// medicine Controller
const medicineCntrl = require("../controllers/medicine");

// Routes
router.get("/medicine/add", medicineCntrl.medicine_create_get);
router.post("/medicine/add", medicineCntrl.medicine_create_post);

router.get("/medicine/index", medicineCntrl.medicine_index_get);
router.post("/medicine/index/one", medicineCntrl.medicine_index_get_one);
// router.get("/medicine/detail", medicineCntrl.medicine_show_get);

router.get("/medicine/edit", medicineCntrl.medicine_edit_get);
router.put("/medicine/update", medicineCntrl.medicine_update_put);

router.delete("/medicine/delete", medicineCntrl.medicine_delete_get);

module.exports = router;



