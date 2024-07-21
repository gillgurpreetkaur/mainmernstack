const Contect =require("../schemamongo/contectSchema");

const contfrom = async(req,res) =>{
    try{
     const resp = req.body;
     await Contect.create(resp);
     return res.status(200).json({msg:"done contect"});
    }catch(error)
    {
        return res.status(500).send('server error');
    }
}
module.exports = contfrom;