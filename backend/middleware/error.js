import HandleError from "../utils/handleError.js";

export default (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message||"internal server error"

    //cast error
    if(err.name === 'CastError'){
        const message = `this is invalid resource ${err.path}`
        err = new HandleError(message,404)
    }

    res.status(err.statuscode).json({
        success:false,
        message:err.message
    })
}