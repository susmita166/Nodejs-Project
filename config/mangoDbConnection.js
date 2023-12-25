const mongoose = require("mongoose");

// const ConnnectionDb = async() =>{
//     try{
//         const connect = await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("MongoDB connected successfully:", process.env.MONGODB_URI);
//     }catch(err){
//         console.error("MongoDB connection error:", err);
//     }
// };

// module.exports = ConnnectionDb;

// module.exports = mongoose
//     .connect(process.env.MONGODB_URI)
//     .then(() => {
//         console.log("MongoDB connected successfully for", process.env.DBName,"");
//     })
//     .catch((err) => console.log(err.message));

//require('dotenv').config();

// module.exports = mongoose.connect("mongodb://127.0.0.1:27017/UserAuthentication")
module.exports = mongoose.connect(process.env.MONGODB_URI)
