var mongoose=require('mongoose');
var Schema=mongoose.Schema;




var offersSchema=new Schema({

    productId:Number,
    productName:String,
    productCategory:String,
    storeid: String,
    prices:Number,
    startDate:Date,
    endDate:Date,
    available:Boolean
    

});
module.exports =mongoose.model('offers',offersSchema)