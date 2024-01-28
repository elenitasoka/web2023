var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var offerSchema = new Schema({

    offerID: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    userName: {
        type: String,
        required: true
    }, 
    
    userPhone: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    reqDate:{
        type: Date,
        required: true
    }, 

    productID: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
        userName: {
        type: String,
        required: true
    }, 

    ammount: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    pickupDate:{
        type: Date,
        required: true
    }, 

    status:{
        type: Boolean,
        required: true
    }, 
    Vname: {
        type: String,
        required: true
    }
});

module.exports=mongoose.model('offers', offerSchema);