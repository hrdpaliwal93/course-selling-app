const { Router } = require('express')
const userModel = require('../db')
const jwt = require('jsonwebtoken')
import userMiddleware from '../middlewares/user'
const userRouter = Router()

userRouter.post('/signup', (req, res) => {
 

})

userRouter.post('/login',(req, res) => {

})

userRouter.post('/course/buy', userMiddleware, (req, res) => {

}) 
module.exports=userRouter

