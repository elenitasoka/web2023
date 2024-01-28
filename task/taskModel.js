var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var taskSchema = new Schema({

    taskID:Number,
    RescuerID:Number,
    Vname:String
});

module.exports=mongoose.model('tasks', taskSchema);