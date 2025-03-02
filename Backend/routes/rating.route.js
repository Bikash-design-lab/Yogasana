const mongoose = require("mongoose")
const {RatingModel} = require("../models/rating.model")
const Add_Rating = async(req,res)=>{
    try {
        const { userId, yogasanaId, rating, comment } = req.body;
         // Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(yogasanaId)) {
            return res.status(400).json({ message: "Invalid user or yogasana ID format" });
        }
        // Ensure rating is within the allowed range
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Rating must be between 1 and 5" });
        }
        // Create a new rating entry
        const newRating = await RatingModel.create({ userId, yogasanaId, rating, comment });
        console.log("Rating added successfully!");
        res.status(201).json({ message: "Rating added successfully!", rating: newRating });
    } catch (error) {
        console.error("Error adding rating:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }

}

module.exports = {Add_Rating}