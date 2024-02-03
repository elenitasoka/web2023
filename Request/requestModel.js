var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var requestSchema = new Schema({

    RequestID:Number, 
    Uname:String,
    Email:String,
    ReqDate:Date,
    ProductId:Number,
    ProductName:String,
    Ammount:Number,
    PickupDate:Date,
    Status: Boolean,
    Vname: String


});


module.exports=mongoose.model('requests', requestSchema);