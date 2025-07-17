
function userMiddleware(req,res,next){
    let token = req.headers.token
    const decodedData = jwt.verify(token, `${process.env.JWT_SECRET}`)
    if(decodedData){
        req.id=decodedData.id
        next()
    }else{
        res.json({
            message:"you are not logged in !"
        })
    }

}
module.exports = userMiddleware