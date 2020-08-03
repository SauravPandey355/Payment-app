const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./models/Users')
require('./services/Passport')


mongoose.connect(keys.mongoURI)

const app = express()

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server Started on Port ${PORT}`));