
const {YogasanaModel} = require("../models/yogasana.model")

const Add_Yogasana =  async (req, res) => {
    try {
        const { name, description, difficulty,ratingId, image } = req.body;
        // Validate required fields
        if (!name || !description) {
            return res.status(400).json({ message: "Name and description are required" });
        }
        // Create a new Yogasana
        const newYogasana = await YogasanaModel.create({
            name, description, difficulty,ratingId, image
        });
        console.log("Yogasana added successfully!");
        res.status(201).json({
            message: "Yogasana added successfully!",
            yogasana: newYogasana
        });    } catch (error) {
        console.error("Error adding Yogasana:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

module.exports = {Add_Yogasana}