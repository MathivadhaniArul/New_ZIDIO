import mongoose from "mongoose";
const datasetSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    filename:{
        type:String,
        required:true
    },
    filepath:{
        type:String,
        required:true
    },
    uploadedAt:{
        type:Date,
        default:Date.now()
    }
},{timestamps:true});

const Dataset=mongoose.model("Dataset",datasetSchema);
export default Dataset;
