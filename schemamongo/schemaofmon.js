const mongoose = require("mongoose");
const jwt =require('jsonwebtoken');
require('dotenv').config(); 
const Registration = new mongoose.Schema({
    username:{
        type:String,
        require : true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

// Registration.methods.generateToken = async function (){
// try{
// return jwt.sign({
//     userId:this._id.toString(),
//     email:this.email,
//     isAdmin:this.isAdmin
// },
// process.env.secretKey,{
//     expiresIn:"30d",
// }
// );

// }catch(error)
// {
// console.log(error);
// }
// };

// Hardcoding the secret key for testing purposes
const secretKey = 'hardcoded_secret_key_for_testing';

Registration.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        }, secretKey, {
            expiresIn: "30d",
        });
    } catch (error) {
        console.log('Error generating token:', error);
    }
};
const User = new mongoose.model("User",Registration);
module.exports= User;