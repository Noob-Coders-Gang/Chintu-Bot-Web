const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    discordId : {type : String , required : true},
    username : {type : String , require : true },
})

const DiscordUser = module.exports = mongoose.model('User' , UserSchema);