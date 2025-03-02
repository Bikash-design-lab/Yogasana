const { default: mongoose } = require("mongoose");

const YogasanaSchema = mongoose.Schema({    // _id: ObjectId,
    name: {type:String, required:true},
    description: {type:String, required:true},
    difficulty: {type:Number, default: 6}, // Average difficulty rating
    ratingId: [{type: mongoose.Schema.Types.ObjectId, ref:"ratings"}]// References to ratings model
    ,image:{type: [String]}
  },{versionKey: false}) 

const YogasanaModel = mongoose.model("yogasanas",YogasanaSchema)
module.exports = {YogasanaModel}