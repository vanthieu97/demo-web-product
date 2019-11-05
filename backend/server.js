const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = 'mongodb://localhost:27017/'
const uri = process.env.ATLAS_URI || 'mongodb+srv://vanthieu97:thieu1997@cluster0-nzbrz.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const users = require('./users/users.controller');
app.use('/users', users)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
