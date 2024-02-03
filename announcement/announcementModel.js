var mongoose=require('mongoose');
var Schema=mongoose.Schema;



var AnnouncementSchema=new Schema({

    ProductName:String,
    ProductID:String



});
module.exports =mongoose.model('Announcement',AnnouncementSchema)