const mongoose = require("mongoose");

module.exports=()=>{
     
    try {   
        mongoose.connect(process.env.DB);
        console.log("DB connected")
    } catch (error) {
        console.log("Error in DB",error)
    }
}