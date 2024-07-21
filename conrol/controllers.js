const { json } = require("express");
const bcrypt =require("bcryptjs");;
const User = require("../schemamongo/schemaofmon");
const home = async(req,res) =>{
    try{
      res.status(200).send('hellow home page');
    
    }catch(error)
    {
     console.log(error);
    }
};
const registration = async(req,res)=>{
    try{
        console.log(req.body);
        const {username,email,phone,password} = req.body;
        const UserExcist = await User.findOne({email});
        if(UserExcist)
            {
                return res.status(400).json({msg:"already present"});
            }
          const saltRound=10;
          const has_password= await bcrypt.hash(password,saltRound);
          const data=  await User.create ({username,email,phone,password:has_password});
          return res.status(200).json({msg: "done registration!!", token: await data.generateToken(),
            userId:data._id.toString(),
          });
    }
    catch(error)
    {
        return res.status(500).send('server error');
    }
}

const login = async(req,res) =>
{
try{
const {email,password} = req.body;
const UserExist=await User.findOne({email})
console.log(UserExist);
if(!UserExist)
  {
    return res.status(400).json({msg:"Invalid response"});
  }
  const comp = await bcrypt.compare(password,UserExist.password);
  if(comp)
    {
      return res.status(200).json({msg: "done login!", token: await UserExist.generateToken(),
      userId:UserExist._id.toString(),
    });
    }
    else
    {
      return res.status(401).json({msg:"Invalid email pass"});
    }
} catch(error)
    {
        return res.status(500).send('server error');
    }
}

module.exports ={home,registration,login};