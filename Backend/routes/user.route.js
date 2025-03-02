const {UserModel} = require("../models/user.model")

const Add_User = async(req,res)=>{
    try {
        const payload = req.body;
        if(!payload.name || !payload.email || !payload.password){
            return res.status(400).json({msg:"Missing requird fields"})
        }
        const new_user = await UserModel.create(payload)
        console.log("User, added Successfully")
        res.status(201).json({message:"Successfull register user to DB",User:new_user})
    } catch (error) {
        console.log("Error, fails to add user in DB please re-try!")
        console.log(error)
        return res.status(500).json({message:"Internal server Error", error:message.error})
    }
}

module.exports = {Add_User}