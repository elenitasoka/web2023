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
exports.getProductsByCategory = async (req, res, next) => {
    const { categoryId } = req.params; // Ανάκτηση της τιμής της παραμέτρου categoryId από το URL

    try {
        const products = await Product.find({ category: categoryId });

        return res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: 'Error' });
    }
};
