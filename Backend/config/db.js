const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const DB_URL = process.env.MONGODB_URL
const connectToDB = mongoose.connect(DB_URL)

module.exports = {connectToDB}