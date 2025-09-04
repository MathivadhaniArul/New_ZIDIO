export const userRegister=async(req,res)=>{
    try{
 const {username,email,password}=req.body;
 const existinguser=await User.findOne({email});
 if(existinguser){
    return res.status(400).json({message:"User already exist"});
 }
    }
    catch{

    }
}