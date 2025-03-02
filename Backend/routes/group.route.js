const mongoose = require("mongoose")
const {GroupModel} = require("../models/group.model")
const Add_Group = async (req, res) => {
    try {
        const { name, members, leaderboard } = req.body;

        // Validate required fields
        if (!name) {
            return res.status(400).json({ message: "Group name is required" });
        }

        // Validate ObjectId format for members and leaderboard
        if (members && !members.every(id => mongoose.Types.ObjectId.isValid(id))) {
            return res.status(400).json({ message: "Invalid member ID(s) format" });
        }
        if (leaderboard && !leaderboard.every(id => mongoose.Types.ObjectId.isValid(id))) {
            return res.status(400).json({ message: "Invalid leaderboard ID(s) format" });
        }

        // Create a new group
        const newGroup = await GroupModel.create({
            name,
            members,
            leaderboard
        });

        console.log("Group added successfully!");
        res.status(201).json({
            message: "Group created successfully!",
            group: newGroup
        });

    } catch (error) {
        console.error("Error adding group:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

module.exports = {Add_Group}