const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://alaukiktiwari2021:5FyFlnJKFi4j7U5K@cluster0.fdgbwmo.mongodb.net/");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})

const User = mongoose.model("User",userSchema);

module.exports = {
    User
}