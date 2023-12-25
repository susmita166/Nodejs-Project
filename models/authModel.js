const getmongoose = require('mongoose');
const authSchema = getmongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const User = getmongoose.model('User', authSchema);
module.exports = User;