const { Router } = require('express')
const {userModel} = require('../db')
const jwt = require('jsonwebtoken')
const userMiddleware = require('../middlewares/user')
const userRouter = Router()


userRouter.post('/signup',async  (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let name = req.body.name

   try{
     await userModel.create({
        username:username,
        password:password,
        name:name
    })
     res.json({
        message:"signed up successful"
    })
   }catch(e){
    console.log(e)
   }
   
 

})

userRouter.post('/login',async (req, res) => {
    let username = req.body.username
    let password = req.body.password

    let user = await userModel.findOne({username, password})
    if(user){
        let token = jwt.sign({
           id:user._id.toString()
        },`${process.env.JWT_USER}`)//Should not share the same secret for user and admins
        res.json({token:token})
    }else{
        res.json({message:"invalid login credentials"})
    }

})

userRouter.post('/course/buy', userMiddleware, (req, res) => {

}) 
module.exports= userRouter

