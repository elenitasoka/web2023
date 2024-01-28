var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var taskSchema = new Schema({

    taskID: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    RescuerID: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    Vname: {
        type: String,
        required: true
    }
});

module.exports=mongoose.model('tasks', taskSchema);