var express = require('express');

const userController = require('../src/login/userController');
const marketController=require('../markets/marketController');
const offersController=require('../offers/offersController');
const router=express.Router();

router.route('/users/login').post(userController.loginUserControllerFn);
router.route('/users/create').post(userController.createUserControllerFn);


router.route('/markets').get(marketController.getMarkets);
router.route('/markets/create').post(marketController.AddMarkets);


router.route('/offers').get(offersController.getOffers);
router.route('/offers/create').post(offersController.AddOffers);



module.exports=router;

