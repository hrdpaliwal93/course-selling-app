
function adminMiddleware(req,res,next){
    let token = req.headers.token
    const decodedData = jwt.verify(token, JWT_ADMIN)
    if(decodedData){
        req.id=decodedData.id
        next()
    }else{
        res.json({
            message:"you do not have admin access !"
        })
    }

}
module.exports = adminMiddleware