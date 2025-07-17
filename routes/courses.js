const Router = require('express')
const jwt = require('jsonwebtoken')
const courseRouter = Router()
const {courseModel}= require('../db')
const userMiddleware = require('../middlewares/user')


courseRouter.get('/', (req,res)=>{
    
})
courseRouter.get('/user', userMiddleware, async (req,res)=>{
    const userID  =req.id
    let userCourses = await courseModel.find({
        creatorID:userID
    })

    res.json({
        userCourses
    })
    
})
courseRouter.get('/:courseid',userMiddleware, (req,res)=>{
    
})

module.exports = courseRouter