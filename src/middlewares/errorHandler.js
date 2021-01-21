const errorHandler=(err,req,res,next)=>{
    console.error(err.stack);
    res.status(err.status||500).send({msg:err.message || "Blad!!!"})
}

module.exports=errorHandler