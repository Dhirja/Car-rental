const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://car-rent:yUuXbgrZrbwnFTNk@rental.gkaganl.mongodb.net/car-rental' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose