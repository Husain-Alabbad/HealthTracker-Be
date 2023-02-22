
const router = require('express').Router();

// Controller
const authCtrl = require('../controllers/auth');


// Routes
// sign up
router.get('/auth/signup',authCtrl.auth_signup_get);
router.post('/auth/signup',authCtrl.auth_signup_post);

// sign in
router.get('/auth/signin',authCtrl.auth_signin_get);
router.post('/auth/signin', authCtrl.auth_signin_post);

// logout
router.get('/auth/logout', authCtrl.auth_logout_get);

module.exports = router;