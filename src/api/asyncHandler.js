const asyncHandler= (callback)=>{
    //funkcja opakowywująca każdy routing i łapiąca błedy
    return function(req,res,next){
        callback(req,res,next).catch(next);
    }
}

module.exports=asyncHandler;