const Router = require('express')
const jwt = require('jsonwebtoken')
const courseRouter = Router()
const courseModel = require('../db')
const userMiddleware = require('../middlewares/user')


courseRouter.get('/', (req,res)=>{
    
})
courseRouter.get('/user', userMiddleware, (req,res)=>{
    
})
courseRouter.get('/:courseid',userMiddleware, (req,res)=>{
    
})

module.exports = courseRouter