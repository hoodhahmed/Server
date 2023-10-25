// Requiring express in our server 
const express = require('express');
const app = express();

// Defining get request at '/' route 
app.get('/pubg', function (req, res) {
  res.json(
    {
      status: "true",
      msg: "success",
      uuid: "02D434B0-A9FC-412D-8761-1390204F55DF",
      device: "com.06F84074-A4B1-48A7-A705-1ADA3671D0F2",
      type: "week",
      start: "2023-09-29 04:59:21",
      end: "2025-10-06 04:59:21"
    }
  );


  // Defining get request at '/multiple' route 
  app.get('/', function (req, res) {
    res.json({
      message: "Hello World!"
    });
  });



  // Setting the server to listen at port 3000 
  app.listen(3000, function (req, res) {
    console.log("Server is running at port 3000");
  }); 
