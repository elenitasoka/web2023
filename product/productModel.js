var mongoose=require('mongoose');
var Schema=mongoose.Schema;



var ProductSchema=new Schema({

    id: String,
    name: String,
    category: String,
    details:mongoose.Schema.Types.Mixed



});
module.exports =mongoose.model('Product',ProductSchema)