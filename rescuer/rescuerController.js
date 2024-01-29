const Rescuer= require('./rescuerModel')

exports.getRescuer=async(req,res,next)=>{

    try {
        const rescuer= await Rescuer.find();

        return res.status(201).json({
            success:true,
            count:rescuer.length,
            data:rescuer
        })


    } catch (error) {
        console.log(error);

        
    }
}

exports.AddRescuer=async(req,res,next)=>{

    try {
        const rescuer=await Rescuer.create(req.body);

        return res.status(201).json({ //201 kodikos gia petuxhmenh leitourgia
            success:true,
            data:rescuer
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({erros:'Error'})
        
        
    }
}