const Router = require('express')
const jwt = require('jsonwebtoken')
const courseRouter = Router()
const courseModel = require('../db')


courseRouter.get('/', (req,res)=>{
    
})
courseRouter.get('/user', (req,res)=>{
    
})
courseRouter.get('/:courseid', (req,res)=>{
    
})

module.exports = courseRouter