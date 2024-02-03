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

exports.getLatestRequest = async (req, res, next) => {
    try {
      const latestRequest = await Requests.findOne().sort({ RequestID: -1 }).limit(1);
  
      return res.status(200).json({
        success: true,
        data: latestRequest
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error' });
    }
  }