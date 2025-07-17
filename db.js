const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const objectID = mongoose.Types.ObjectId;

mongoose.connect(`${process.env.DB_URL}course-selling-app`).then(console.log("database connected")).catch((e)=>console.log(e))

const userschema = new Schema({
    username: String,
    password: String,
    name: String
})

const courseschema = new Schema({
    creatorID: objectID,
    title: String,
    description: String,
    price: Number,
    validity: String,
    imageURL: String,
   


})

const purchaseschema = new Schema({
    courseID: objectID,
    userID: objectID,


})
const adminschema = new Schema({
   name:String,
   email:String,
   password:String


})

const userModel = mongoose.model('users', userschema);
const courseModel = mongoose.model('courses', courseschema);
const adminModel = mongoose.model('admin', adminschema);
const purchasesModel = mongoose.model('purchases', purchaseschema);



module.exports = {
    userModel,
    courseModel,
    purchasesModel,
    adminModel
}