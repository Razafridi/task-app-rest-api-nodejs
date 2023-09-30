const express = require('express');
const { registerUser, LoginUser } = require('../controllers/usersController');

const userRouter = express.Router();


// userRouter.route('/')
userRouter.post('/register', registerUser)
userRouter.post('/login' , LoginUser)
// userRouter.route('/:id')


module.exports = userRouter


