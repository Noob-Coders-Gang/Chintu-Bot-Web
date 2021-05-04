const mongoose = require('mongoose');
// Connecting Database

const uri = process.env.ATLAS_URI;
module.exports = mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connected :) ")
})

