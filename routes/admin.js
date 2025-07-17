const Router = require("express")
const adminRouter = Router();
const jwt = require('jsonwebtoken')
const {adminModel, courseModel} = require('../db')
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
            id:admin._id.toString()
        },`${process.env.JWT_ADMIN}`)
        
        res.json({token:token})
    }else{
        res.json({message:"invalif admin credentials"})
    }
    
   }catch(e){
    console.log(e)
   }
   

})

adminRouter.post('/create/course',adminMiddleware, async (req, res) => {
    const id = req.id;
    const { title, description, price , validity, imageURL , creatotID} = req.body;

    try{
        let course = await courseModel.create({
        title,
        description,
        price,
        validity,
        creatorID:id,
        imageURL ,
         //watch kirat video on coind web3 saas in 6 hrs....to know how to make a pipeline to that user can directly add image to DB rather than URL
    })
    res.json({
        message:"course created !!",
        courseID:course._id
    })

       
    }catch(e){
        console.log(e)
    }


})

adminRouter.delete('/delete/course',adminMiddleware, async  (req, res) => {
    let courseID = req.body.courseID
   try{
     let course = await courseModel.findOneAndDelete(courseID)
      if(course){
         res.json({message:"couse deleted !"})
   }
   }catch(e){
    console.log(e)
   }
  
   

})
adminRouter.put('/update/course', adminMiddleware, async  (req, res) => {
    const adminID = req.id
      const { newtitle, newdescription, newprice , newvalidity, courseID} = req.body;
    try{
        await courseModel.findOneAndUpdate({
            _id:courseID,
            creatorID:adminID
        },{
            title:newtitle,
            description:newdescription,
            price:newprice,
            validity:newvalidity,
        })
        res.json({message:"course updated succcessfully"})
    }catch(e){
        console.log(e)
    }
      
    
})
module.exports = adminRouter;