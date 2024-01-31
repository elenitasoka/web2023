const rescuerModel= require('./rescuerModel')


exports.getRescuer=async(req,res,next)=>{

    try {
        const rescuer= await rescuerModel.find();

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
        const rescuer=await rescuerModel.create(req.body);

        return res.status(201).json({ //201 kodikos gia petuxhmenh leitourgia
            success:true,
            data:rescuer
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({erros:'Error'})
        
        
    }
}


module.exports.loginRescuerDbService = (rescuerDetails) => {
    return new Promise(function myFn(resolve, reject) {
        rescuerModel.findOne({ email: rescuerDetails.email }, function getresult(errorvalue, result) {
            if (errorvalue) {
                reject({ status: false, msg: "Invalid Data" });
            } else {
                if (result !== undefined && result !== null) {
                    // Εδώ δεν χρειάζεται κρυπτογράφηση, αφού δεν έχετε σχετικό κομμάτι κώδικα
                    if (result.password === rescuerDetails.password) {
                        resolve({ status: true, msg: "Rescuer validated successfully" });
                    } else {
                        reject({ status: false, msg: "Rescuer validation failed" });
                    }
                } else {
                    reject({ status: false, msg: "Invalid rescuer details" });
                }
            }
        });
    });
};
module.exports.loginRescuerControllerFn=async(req, res) => {
    var result = null;
    try {
        result=await loginRescuerDbService(req.body)

        if(result.status){
            res.send({"status":true, "message":result.msg});
        }else{
            res.send({"status":false, "message":result.msg});
        }
        
    } catch (error) {
        console.log(error);
        res.send({"status":false, "message":error.msg});
    }
}