import Dataset from "../models/dataset.models.js";

export const dataSetUpload=async(req,res)=>{
try{if (!req.file){
    return res.status(400).json({message:"No File uploaded"});
}
const dataset=new Dataset({
    user:req.user.userId,
    filename:req.file.filename,
    filepath:req.file.filepath,
});
await dataset.save();
return res.status(200).json({message:"File uploaded successfully"});
}
catch(error){
    return res.status(500).json({message:"Server Error while uploading file"})
}
}