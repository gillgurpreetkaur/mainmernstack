const validate = (schema)  => async(req,res,next)=>{
    try{
      const parsbody = await schema.parseAsync(req.body);
      req.body = parsbody;
      next();
    }catch(er)
    {
        const message = er.errors[0].message;
       
        console.log(message);
        res.status(400).json({msg:message});
    }
}
module.exports = validate;