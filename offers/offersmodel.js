var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var offersSchema=new Schema({

    OfferID: Number,
    Uname:String,
    Email:Number,
    OfferDate:Date,
    ProductId:Number,
    ProductName:String,
    Ammount:Number,
    PickupDate:Date,
    Status: Boolean,
    Vname: String

    

});
module.exports =mongoose.model('offers',offersSchema)