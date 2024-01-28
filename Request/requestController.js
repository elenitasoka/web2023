const Requests=require('./requestModel')

exports.getRequests=async(req,res,next)=>{

    try {
        const Request= await Requests.find();

        return res.status(201).json({
            success:true,
            count:Request.length,
            data:Request
        })


    } catch (error) {
        console.log(error);

        
    }
}

exports.AddRequests=async(req,res,next)=>{

    try {
        const Request=await Requests.create(req.body);

        return res.status(201).json({
            success:true,
            data:Request
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({erros:'Error'})
        
        
    }
}