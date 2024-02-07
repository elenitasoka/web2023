var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var rescuerSchema = new Schema({

    ID: Number,
    username:String,
    usename:String,
    email:String,
    password:String,
    Vname:String,
    address:String

});

module.exports=mongoose.model('rescuers', rescuerSchema);