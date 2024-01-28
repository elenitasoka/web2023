var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var rescuerSchema = new Schema({

    rescuerID: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    rescuerName: {
        type: String,
        required: true
    }, 

    rescquerPassword: {
        type: String,
        required: true
    },

    Vname: {
        type: String,
        required: true
    }
});

module.exports=mongoose.model('rescuers', rescuerSchema);