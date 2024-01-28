var mongoose=require('mongoose');
var Schema=mongoose.Schema;



var DatabaseSchema=new Schema({

    category: String,
    name: String, 
    ProductID: String,
    Ammount: Number



});
module.exports =mongoose.model('Database',DatabaseSchema)