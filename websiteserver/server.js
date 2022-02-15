// Should be no need to change this file, from mern stack tutorial
// This file uses 4 different libraries (mongodb, express, cors, dotenv)
// Basically, this file is requiring express and cors to be used. 


const express = require("express");
const app = express();
const mongoose = require('mongoose')
const TTPModel = require('./models/TTP')
const cors = require('cors')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ShubhamBatra:M%40gic2001@ravailability-database.dofjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.get("/getTTP", (req, res) => {
  TTPModel.find({}, (err, result) =>  {
    if (err) {
      res.json(error)
    } else {
      console.log(`result ${result}`)
      res.json(result)
      console.log(`Connection Successful!`);
    }
  })
})


app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});

/*const express = require("express");
const app = express();
const cors = require("cors");
// Accessing port variable from config file
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});*/