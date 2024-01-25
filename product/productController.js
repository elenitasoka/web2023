const Product= require('./productModel')

exports.getProduct=async(req,res,next)=>{

    try {
        const product= await Product.find();

        return res.status(200).json({
            success:true,
            count:product.length,
            data:product
        })


    } catch (error) {
        console.log(err);

        
    }
}

exports.AddOProduct=async(req,res,next)=>{

    try {
        const product=await Product.create(req.body);

        return res.status(300).json({
            success:true,
            data:product
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({erros:'Error'})
        
        
    }
}