var mongoose=require('mongoose');
var Schema=mongoose.Schema;



var AnnouncementSchema=new Schema({

    ProductName:String,
    ProductID:Number



});
module.exports =mongoose.model('Announcement',AnnouncementSchema)