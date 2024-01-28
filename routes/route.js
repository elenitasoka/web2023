var express = require('express');

const userController = require('../src/login/userController');
const marketController=require('../markets/marketController');
const offersController=require('../offers/offersController');
const productController=require('../product/productController');
const categoryController=require('../category/categoryController');
const router=express.Router();

router.route('/users/login').post(userController.loginUserControllerFn);
router.route('/users/create').post(userController.createUserControllerFn);
router.route('/users/info').get(userController.getUserDataControllerFn);


router.route('/markets').get(marketController.getMarkets);
router.route('/markets/create').post(marketController.AddMarkets);


router.route('/offers').get(offersController.getOffers);
router.route('/offers/create').post(offersController.AddOffers);


router.route('/product').get(productController.getProduct);
router.route('/product/create').post(productController.AddOProduct);


router.route('/category').get(categoryController.getCategory);
router.route('/category/create').post(categoryController.AddCategory);

module.exports=router;

