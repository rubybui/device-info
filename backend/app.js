const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Ruby:d2sO0ujhW4DwaR43@device-info-3uhyo.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(()=> {
    console.log('Connected to database!')
  })
  .catch(()=>{
    console.log('Connection failed')
  });

const app  = express();

app.post((req,res,next)=>{
  const info = new Info({
    ID: string,
    name: string,
    Description: string,
    PDFs: string,
  });
  info.save();
  res.status(201).json({
    message: "Device info added"
  });
});
app.use((req, res, next)=>{
  const info = [
    { ID: "1121231234",
      name: "lala",
      Description: 'IPhone',
      PDFs: 'https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf'}
  ]
  res.status(200).json({
    message: "Posts!",
    info:info
  });
});
app.get((req, res, next)=>{
  Info.find()
    .then(documents => {
      res.status(200).json({
        message: "Post fetched successfully!",
        infos: documents.map()
      });
    });
});


module.exports = app;
