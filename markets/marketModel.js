var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var MarketSchema=new Schema({

    name:String,
    type: String,
    properties: mongoose.Schema.Types.Mixed, 
    geometry: {
      type:{
        type: String,
        enum:['Point']
     },
       coordinates:{
       type:[Number],
       index:'2dsphere'
      }
    },
    storeid: String

});
module.exports =mongoose.model('Markets',MarketSchema)
