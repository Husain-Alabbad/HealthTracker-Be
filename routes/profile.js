// Requiring express module
const express = require('express');

// Requiring express router
const router = express.Router();

// Router using express RESTfully
router.use(express.json());

// Requiring method override module 
let methodOverRide = require('method-override');

// Router using method override module
router.use(methodOverRide('_method'));

// Requiring isLoggedIn functionality
const isLoggedIn = require("../helper/isLoggedIn");

// profile Controller
const profileCntrl = require("../controllers/profile");

// Routes
router.get("/profile/add", profileCntrl.profile_create_get);
router.post("/profile/add", profileCntrl.profile_create_post);

router.get("/profile/index", profileCntrl.profile_index_get);
// router.get("/profile/detail", profileCntrl.profile_show_get);

router.get("/profile/edit", profileCntrl.profile_edit_get);
router.put("/profile/update", profileCntrl.profile_update_put);

router.delete("/profile/delete", profileCntrl.profile_delete_get);

module.exports = router;



