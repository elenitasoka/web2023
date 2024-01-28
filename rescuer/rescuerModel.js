var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var rescuerSchema = new Schema({

    ID: Number,
    usename:String,
    password:String,
    Vname:String

});

module.exports=mongoose.model('rescuers', rescuerSchema);