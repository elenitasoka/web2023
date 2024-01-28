const Product= require('./productModel')

exports.getProduct=async(req,res,next)=>{

    try {
        const product= await Product.find();

        return res.status(201).json({
            success:true,
            count:product.length,
            data:product
        })


    } catch (error) {
        console.log(error);

        
    }
}

exports.AddOProduct=async(req,res,next)=>{

    try {
        const product=await Product.create(req.body);

        return res.status(201).json({ //201 kodikos gia petuxhmenh leitourgia
            success:true,
            data:product
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({erros:'Error'})
        
        
    }
}