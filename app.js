const express = require('express');
const mongoose = require('mongoose');
const employeesRoutes = require('./routes/employees');
const app = express();

app.use(express.json());

// MONGODB CONNECTION: mongodb+srv://sparky:<password>@cluster.bn5mjsq.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://sparky:${process.env.REACT_APP_CONNECT_KEY}@cluster.bn5mjsq.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('succesfully connected to MongoDB Atlas!')
  })
  .catch((error) =>{
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  })

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/v1/employees', employeesRoutes);


module.exports = app;