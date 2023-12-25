const createCustomErr = require('http-errors');  // Create a custom error using http-errors module
const bcrypt = require("bcrypt")
const getUserModel = require("../models/authModel");
const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw createCustomErr.BadRequest("Email and password are required");
        }
        const doesExist = await getUserModel.findOne({ email: email });
        if (doesExist) {
            throw createCustomErr(409, `${email} Email Already Exists`);
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const registeredUser = await getUserModel.create({ email, password:hashedPassword });
            res.status(200).json({ status: true, message: "Data Added Successfully", data: registeredUser });
        }
    } catch (err) {
        next(err);
    }
};

    

const login = (req, res, next) =>{
return res.send("welcome")
};

const refreshToken = (req, res, next) =>{

};

const logout = (req, res, next) =>{
    res.send("This is a logout function");
};

module.exports = {
    register,
    login,
    refreshToken,
    logout
};

