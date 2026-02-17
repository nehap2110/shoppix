
export default (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message||"internal server error"

    res.status(err.statuscode).json({
        success:false,
        message:err.message
    })
}