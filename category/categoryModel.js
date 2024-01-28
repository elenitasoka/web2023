var mongoose=require('mongoose');
var Schema=mongoose.Schema;



var CategorySchema=new Schema({

    id: String,
    category: String



});
module.exports =mongoose.model('caregory',CategorySchema)