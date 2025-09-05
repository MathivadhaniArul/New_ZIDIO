export const dataSetUpload=async(req,res)=>{
try{if (!req.file){
    return res.status(400).json({message:"No File uploaded"});
}
return res.status(200).json({message:"File uploaded successfully"});
}
catch(error){
    return res.status(500).json({message:"Server Error while uploading file"})
}
}