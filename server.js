// Should be no need to change this file, from mern stack tutorial
// This file uses 3 different libraries (mongoose, express, cors)
// Basically, this file is requiring express and cors to be used. 

// Imports
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const TTPModel = require('./models/TTP')
const OrbachModel = require('./models/Orbach')
const BytesModel = require('./models/Bytes')
const UsersModel = require('./models/Users')


// Needed for deployment
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');

app.use(express.json());
var corsOptions = {
    origin: "*",
    credentials: true 
};
app.use(cors(corsOptions));

// Password is here, need to hide later
mongoose.connect("mongodb+srv://ShubhamBatra:M%40gic2001@ravailability-database.dofjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})

// Everything below contains POST and GET requests that communicate with database

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

// To add or update user info in the database
  app.post("/insertUserInfo", async (req, res) => {
    const email = req.body.email;
    const message = req.body.message;
    const user = await UsersModel.findOne({ email });
    // If email already exists in database, update entry
    if (user) {
      user.message = message;
      await user.save();
      return res.json({ msg: "User Data Updated" });
    }
    // Otherwise, simply create a new entry
    const Users = new UsersModel({ email: email, message: message });
    await Users.save();
    return res.json({ msg: "Inserted user data into database" });
    });
    
    

// To get User info from database
app.get("/getUserInfo", async (req, res) => {
  const email = req.body.email;
  const user = await UsersModel.findOne({ email });
  UsersModel.find({user}, (err, result) => {
    if (err) {
      res.json(error)
    } else {
      res.json(result)
      console.log(`User info obtained from database`)
    }
  });
});

// Below stuff for deployment
app.use(express.static(path.join(__dirname,'./reactwebsite/build/')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './reactwebsite/build', 'index.html')); 
}); 

app.listen(PORT, () => {
  console.log(`Server is running on port 5000`);
});
