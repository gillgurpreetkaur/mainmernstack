const mongoose = require("mongoose");

const ContectSchem = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    username : {
        type:String,
        require:true
    },
    phonumber: {
        type:Number,
        require:true
    },
    mesagebox :{
        type:String,
        require:true
    }
});

const Contect = new mongoose.model("Contect",ContectSchem);
module.exports =Contect;
