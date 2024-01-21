const Markets=require('./marketModel')
exports.getMarkets=async(req,res,next)=>{

    try {
        const markets= await Markets.find();

        return res.status(200).json({
            success:true,
            count:markets.length,
            data:markets
        })


    } catch (error) {
        console.log(err);

        
    }
}

exports.AddMarkets=async(req,res,next)=>{

    try {
        const markets=await Markets.create(req.body);

        return res.status(300).json({
            success:true,
            data:markets
        })


    } catch (error) {
        console.log(err)
        res.status(500).json({erros:'Error'})
        
        
    }
}