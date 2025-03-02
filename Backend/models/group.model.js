const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
    name: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }], // Array of users references
    leaderboard: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }] // Array of top-performing users
}, { versionKey: false });

const GroupModel = mongoose.model("groups", GroupSchema);
module.exports = { GroupModel };
