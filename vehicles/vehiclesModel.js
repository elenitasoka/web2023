var mongoose=require('mongoose');
var Schema=mongoose.Schema;



var VehicleSchema=new Schema({

    Vname: String, 
    VProducts: String, //Θελει αλλαγη (πινακας προιοντων)



});
module.exports =mongoose.model('Vehicle',VehicleSchema)