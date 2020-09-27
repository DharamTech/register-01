var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")


require('dotenv').config();

var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
     bodyParser.urlencoded({
     	extended: false
     })
)

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
    const connection = mongoose.connection;  
    connection.once('open', () => {
    console.log("mongoDB database connection established successfully");
})

var Users = require('./routes/Users')


app.use('/users', Users)

app.listen(port, () => {
	console.log("Server is running on port: " + port)
})