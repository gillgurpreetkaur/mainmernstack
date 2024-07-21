const {z} = require("zod");

const signup =z.object({
    username:z.string({required_error:"is shold username"})
    .trim()
    .min(3,{message:"max to max it shoul of 3 character"})
    .max(255,{message :"max it should be of 255"}),

    email:z.string({required_error:"is shold email"})
    .trim()
    .email({required_error:"email is needed"})
    .min(3,{message:"max to max it shoul of 3 character"})
    .max(255,{message :"max it should be of 255"}),

    phone:z.string({required_error:"phone number needed"})
    .trim()
    .min(10,{message:"max to max it shoul of 10 character"})
    .max(20,{message :"max it should be of 20"}),

    password:z.string({required_error:"is shold password"})
    .min(7,{message:"max to max it shoul of 7 character"})
    .max(205,{message :"max it should be of 205"}),
});
module.exports = signup;