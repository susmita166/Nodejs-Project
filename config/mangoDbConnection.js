const mongoose = require("mongoose");

const ConnnectionDb = async() =>{
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully:", process.env.MONGODB_URI);
    }catch(err){
        console.error("MongoDB connection error:", err);
    }
};

module.exports = ConnnectionDb;




