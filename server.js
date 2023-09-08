const express = require('express')
const app = express()
const mongoose = require('mongoose'); 
mongoose.set('strictQuery', false);
var route=require('./routes/route');
const cors=require('cors');

app.use(cors(
    {
        origin: "http://localhost:4200"
    }
));

app.listen(9992, function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});


mongoose.connect("mongodb+srv://ilias123:el280664@cluster0.tqglbjo.mongodb.net/web2023?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true},
function checkDb(error)
{
    if(error)
    {
        console.log("Error Connecting to DB");
    }
    else
    {
        console.log("Succesfully Connected to DB");
    }
});

app.use(express.json());
app.use(route);