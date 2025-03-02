const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    // _id: ObjectId,
    name: {type:String, required:true},
    email:{type:String, required:true},
    password: {type:String, default:"pass123"},
    groupId:[{type:mongoose.Schema.Types.ObjectId, ref:"groups"}], // References to groups model
    points:{type:Number, default:7},
    badges: [String]
},{versionKey:false})

const UserModel = mongoose.model("users",UserSchema)
module.exports = {UserModel}

