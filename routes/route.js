var express = require('express');

const userController = require('../src/login/userController');
const router=express.Router();

router.route('/users/login').post(userController.loginUserControllerFn);
router.route('/users/create').post(userController.createUserControllerFn);
router.route('/users/info').get(userController.getUserDataControllerFn);

module.exports=router;

