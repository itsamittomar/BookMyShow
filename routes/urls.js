const e = require('express');
const express = require('express');
const UserController = require('../controllers/user.controller')


const router = express.router()

const usercontroller = new UserController()
usercontroller.register(router)

module.exports=router;