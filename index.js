const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const usersRoute = require('./routes/users');
const userRoute = require('./routes/user');

const app = express();

//body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/users', usersRoute);
app.use('/api/user', userRoute)

//initialise the mongodb
mongoose.connect(keys.mongo_db.dbURI, ()=>{console.log('mongo db running')});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Server running on ${port}`)});
