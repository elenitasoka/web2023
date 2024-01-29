const Admin= require('./adminModel')

exports.getAdmin=async(req,res,next)=>{

    try {
        const admin= await Admin.find();

        return res.status(200).json({
            success:true,
            count:admin.length,
            data:admin
        })


    } catch (error) {
        console.log(error);

        
    }
}

exports.AddAdmin=async(req,res,next)=>{

    try {
        const admin=await Admin.create(req.body);

        return res.status(201).json({
            success:true,
            data:admin
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({erros:'Error'})
        
        
    }
}