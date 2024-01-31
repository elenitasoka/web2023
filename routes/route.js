var express = require('express');

const userController = require('../src/login/userController');
const marketController=require('../markets/marketController');
const offersController=require('../offers/offersController');
const productController=require('../product/productController');
const databaseController=require('../database/databaseController');
const adminController=require('../admin/adminController');
const announcementController=require('../announcement/announcementController');
const vehiclesController=require('../vehicles/vehiclesController');
const categoryController=require('../category/categoryController');
const requestController=require('../Request/requestController');
const rescuerController=require('../rescuer/rescuerController');
const taskController=require('../task/taskController');


const router=express.Router();

router.route('/users/login').post(userController.loginUserControllerFn);
router.route('/users/create').post(userController.createUserControllerFn);
//router.route('/users/find').post(userController.getUserByEmailFn);


router.route('/markets').get(marketController.getMarkets);
router.route('/markets/create').post(marketController.AddMarkets);


router.route('/offers').get(offersController.getOffers);
router.route('/offers/create').post(offersController.AddOffers);


router.route('/product').get(productController.getProduct);
router.route('/product/create').post(productController.AddOProduct);
router.route('/product/filter').get(productController.getProductsByCategory);



router.route('/category').get(categoryController.getCategory);
router.route('/category/create').post(categoryController.AddCategory);

router.route('/Request').get(requestController.getRequests);
router.route('/Request/create').post(requestController.AddRequests);
router.route('/Request/latest').get(requestController.getLatestRequest);


router.route('/rescuer').get(rescuerController.getRescuer);
router.route('/rescuer/create').post(rescuerController.AddRescuer);
router.route('/rescuer/login').post(rescuerController.loginRescuerControllerFn);


router.route('/task').get(taskController.getTask);
router.route('/task/create').post(taskController.addTask);
router.route('/task/delete').post(taskController.deleteTask);

router.route('/database').get(databaseController.getDatabase);
router.route('/database/create').post(databaseController.AddDatabase);

router.route('/vehicles').get(vehiclesController.getVehicles);
router.route('/vehicles/create').post(vehiclesController.AddVehicle);

router.route('/announcement').get(announcementController.getAnnouncement);
router.route('/announcement/create').post(announcementController.AddAnnouncement);

router.route('/admin').get(adminController.getAdmin);
router.route('/admin/create').post(adminController.AddAdmin);
module.exports=router;

