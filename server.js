// Should be no need to change this file, from mern stack tutorial
// This file uses 3 different libraries (mongoose, express, cors)
// Basically, this file is requiring express and cors to be used. 

const express = require("express");
const app = express();
const mongoose = require('mongoose')
const TTPModel = require('./models/TTP')
const OrbachModel = require('./models/Orbach')
const BytesModel = require('./models/Bytes')
const userFavoriteRoomModel = require('./models/userFavoriteRoom')

const PORT = process.env.PORT || 5000; // Needed for deployment

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

// For when user inputs their favorite room
app.post("/postUserFavoriteRoom", async (req, res) => {
  const email = req.body.email;
  const favroom = req.body.favroom;

  const userFavoriteRoom = new userFavoriteRoomModel({email: email, favroom: favroom })
  await userFavoriteRoom.save();
  res.send("Success");
});

// Needed for deployment

app.use(express.static(path.join(__dirname,'./reactwebsite/build/')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './reactwebsite/build', 'index.html')); 
}); 


app.listen(PORT, () => {
  console.log(`Server is running on port 5000`);
});
