// Should be no need to change this file, from mern stack tutorial
// This file uses 4 different libraries (mongodb, express, cors, dotenv)
// Basically, this file is requiring express and cors to be used. 

const express = require("express");
const app = express();
const mongoose = require('mongoose')
const TTPModel = require('./models/TTP')
const OrbachModel = require('./models/Orbach')
const BytesModel = require('./models/Bytes')
const cors = require('cors')
const path = require('path');


app.use(express.json());
var corsOptions = {
    origin: "*",
    credentials: true 
};
app.use(cors(corsOptions));


mongoose.connect("mongodb+srv://ShubhamBatra:M%40gic2001@ravailability-database.dofjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})

// To get from TTP collection
app.get("/getTTP", (req, res) => {
  TTPModel.find({}, (err, result) =>  {
    if (err) {
      res.json(error)
    } else {
      res.json(result)
      console.log(`TTP connection successful!`);
    }
  }).sort({ _id: -1 }).limit(1)
})

// To get from Orbach collection
app.get("/getOrbach", (req, res) => {
  OrbachModel.find({}, (err, result) =>  {
    if (err) {
      res.json(error)
    } else {
      res.json(result)
      console.log(`Orbach connection successful!`);
    }
  }).sort({ _id: -1 }).limit(1)
})

// To get from Bytes collection
app.get("/getBytes", (req, res) => {
  BytesModel.find({}, (err, result) =>  {
    if (err) {
      res.json(error)
    } else {
      res.json(result)
      console.log(`Bytes connection successful!`);
    }
  }).sort({ _id: -1 }).limit(1)
})

// POST method route
app.post('/userFavoriteRoom', (req, res) => {
  res.send('POST request to the homepage')
})

//Not sure whether needed for deployment
app.use(express.static('reactwebsite'));


const PORT = process.env.PORT || 5000; // Needed for deployment
app.listen(PORT, () => {
  console.log(`Server is running on port 5000`);
});
