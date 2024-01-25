const Category= require('./categoryModel')

exports.getCategory=async(req,res,next)=>{

    try {
        const category= await Category.find();

        return res.status(200).json({
            success:true,
            count:category.length,
            data:category
        })


    } catch (error) {
        console.log(err);

        
    }
}

exports.AddCategory=async(req,res,next)=>{

    try {
        const category=await Category.create(req.body);

        return res.status(300).json({
            success:true,
            data:category
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({erros:'Error'})
        
        
    }
}