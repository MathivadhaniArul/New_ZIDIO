import Dataset from "../models/dataset.models.js";
import { promises as fs } from 'fs';

// dataset upload
export const dataSetUpload = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No File uploaded" });
        }
        const dataset = new Dataset({
            user: req.user.userId,
            filename: req.file.filename,
            filepath: req.file.path,
        });
        await dataset.save();
        return res.status(200).json({ message: "File uploaded successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error while uploading file" })
    }
}

// get all datasets for a user
export const getUserDatasets = async (req, res) => {
    try {
        const userId = req.user.userId;
        const datasets = await Dataset.find({ user: userId });
        return res.status(200).json(datasets);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error while fetching datasets" });
    }
}

//  delete a dataset
export const deleteDataset = async (req, res) => {
    try {
        const { datasetId } = req.body;

        if (!datasetId) {
            return res.status(400).json({ message: "Dataset ID is required" });
        }

        const userId = req.user.userId;

        const dataset = await Dataset.findOne({ _id: datasetId, user: userId });

        if (!dataset) {
            return res.status(404).json({ message: "Dataset not found" });
        }

        const absolutePathToDelete = dataset.filepath;

        try {
            await fs.unlink(absolutePathToDelete);
        } catch (fileError) {
            console.warn(`Could not find file to delete at: ${absolutePathToDelete}`);
        }

        await Dataset.findByIdAndDelete(datasetId);

        return res.status(200).json({ message: "File deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server Error while deleting dataset" });
    }
}