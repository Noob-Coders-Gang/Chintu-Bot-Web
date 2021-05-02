const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const authRoute = require('./routes/auth')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connected :) ")
})

app.get('/' , (req , res) => {
    res.json({
        response : "Hello there!"
    })
})

app.use('/auth' , authRoute);



app.listen(port, () => {
    console.log(`Server is up , port :${port}`)
});

