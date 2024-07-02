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
var loginAdmin = (adminDetails) => {
  return new Promise(function myFn(resolve, reject) {
      admin.findOne({ username: adminDetails.username }, function getresult(errorvalue, result) {
          if (errorvalue) {
              reject({ status: false, msg: "Invalid Data" });
          } else {
              if (result !== undefined && result !== null) {

                if (result.password === adminDetails.password) {
                      resolve({ status: true, msg: "Admin validated successfully" });
                  } else {
                      reject({ status: false, msg: "Admin validation failed" });
                  }
              } else {
                  reject({ status: false, msg: "Invalid admin details" });
              }
          }
      });
  });
};

module.exports.loginAdminControllerFn = async (req, res) => {
  var result = null;
  try {
      result = await loginAdmin(req.body);

      if (result.status) {
          res.send({ "status": true, "message": result.msg });
      } else {
          res.send({ "status": false, "message": result.msg });
      }
  } catch (error) {
      console.log(error);
      res.send({ "status": false, "message": error.msg });
  }
};