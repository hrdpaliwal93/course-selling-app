const Router = require("express")
const adminRouter = Router();
const jwt = require('jsonwebtoken')
const {adminModel} = require('../db')
const adminMiddleware = require('../middlewares/admin')

adminRouter.post('/signup', async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let name = req.body.name

   try{
     await adminModel.create({
       email:email,
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

adminRouter.post('/login',async  (req, res) => {
    let email = req.body.email
    let password = req.body.password
   

   try{
     let admin = await adminModel.findOne({
       email,password
    })
    if(admin){
        let token = jwt.sign({
            id:admin._id
        },`${process.env.JWT_ADMIN}`)
        
        res.json({token:token})
    }else{
        res.json({message:"invalif admin credentials"})
    }
    
   }catch(e){
    console.log(e)
   }
   

})

adminRouter.post('/create/course',adminMiddleware, (req, res) => {


})

adminRouter.delete('/delete/course',adminMiddleware,  (req, res) => {


})
adminRouter.put('/update/course', adminMiddleware, (req, res) => {


})

module.exports = adminRouter;