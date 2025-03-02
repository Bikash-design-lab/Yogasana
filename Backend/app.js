const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const morgan = require("morgan");

// Import models
const { GroupModel } = require("./models/group.model");
const { UserModel } = require("./models/user.model");
const { RatingModel } = require("./models/rating.model");
const { YogasanaModel } = require("./models/yogasana.model");

// Import database connection
const { connectToDB } = require("./config/db");

// Import route handlers
const { Add_Group } = require("./routes/group.route");
const { Add_User } = require("./routes/user.route");
const { Add_Rating } = require("./routes/rating.route");
const { Add_Yogasana } = require("./routes/yogasana.route");

app.use(cors()); // Enables CORS for all requests
app.use(morgan("dev")); // Logs HTTP requests
app.use(express.json()); // Parses JSON bodies

// Test API
app.get("/healthy", (req, res) => {
    res.status(200).json({ msg: "Yey, API working fine! You can proceed to the next step." });
});

// Routes 
app.post("/add_new_user", Add_User);
app.post("/add_new_rating", Add_Rating);
app.post("/add_new_yogasana", Add_Yogasana);
app.post("/add_new_group", Add_Group);

app.get("/rating", async (req, res) => {
    const allRating = await RatingModel.find();
    res.json({ message: allRating });
});

app.get("/user", async (req, res) => {
    const allUser = await UserModel.find();
    res.json({ message: allUser });
});

app.get("/group", async (req, res) => {
    const allGroup = await GroupModel.find();
    res.json({ message: allGroup });
});
// http://localhost:8080/yogasanas
app.get("/yogasans", async (req, res) => {
    const allYogasans = await YogasanaModel.find();
    res.json({ message: allYogasans });
});

// Start server
app.listen(PORT, async () => {
    try {
        await connectToDB; 
        console.log("DB connected successfully");
    } catch (error) {
        console.error("Error! Failed to connect to DB:", error);
    }
    console.log(`🚀 Server is running on PORT: ${PORT}`);
});
