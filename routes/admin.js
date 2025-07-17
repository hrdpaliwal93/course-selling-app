const Router = require("express")
const adminRouter = Router();
const jwt = require('jsonwebtoken')
const {adminModel} = require('../db')
const adminMiddleware = require('../middlewares/admin')

adminRouter.post('/signup', (req, res) => {


})

adminRouter.post('/login', (req, res) => {

})

adminRouter.post('/create/course',adminMiddleware, (req, res) => {


})

adminRouter.delete('/delete/course',adminMiddleware,  (req, res) => {


})
adminRouter.put('/update/course', adminMiddleware, (req, res) => {


})

module.exports = adminRouter;