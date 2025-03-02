const { default: mongoose } = require("mongoose");


const RatingSchema= mongoose.Schema({
    // _id: ObjectId,
    userId: [{type: mongoose.Schema.Types.ObjectId, ref:"users"}], // References to Users model
    yogasanaId: [{type: mongoose.Schema.Types.ObjectId, ref:"yogasanas"}], // References to Yogasanas model
    rating: {type:Number, min:1, max:5, default:4}, // 1 to 5
    comment: {type:String, default:"Yoga is not just about the pose but the journey—give it your all!"}
  },{versionKey: false})

const RatingModel = mongoose.model("ratings", RatingSchema)

module.exports = {RatingModel}
