const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,        
    },
    image: String,
    token: String
})

const User = mongoose.model('UserCollection', userSchema);
module.exports = User;