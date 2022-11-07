const express = require('express');
const passport = require('passport');

const router = express.Router();
const sellerContoller = require('../controllers/seller_controllers');


router.post('/sign-up',sellerContoller.create);

// using passport as a middleware to authenticate
router.post('/sign-in',passport.authenticate('local', { failureRedirect: '/seller-login' }),sellerContoller.createSession);
router.post('/addProduct', sellerContoller.addProduct)
router.get('/logout',sellerContoller.destroySession);

module.exports = router;