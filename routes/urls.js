const e = require('express');
const express = require('express');
const UserController = require('../controllers/user.controller')
const MovieController = require('../controllers/movie.controller');


const router = express.router()

const usercontroller = new UserController()
usercontroller.register(router)

const moviecontroller = new MovieController()
moviecontroller.register(router)

module.exports=router;