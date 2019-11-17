require('rootpath')();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('./config')

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.set('Secret', config.secret);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//const uri = 'mongodb://localhost:27017'
const uri = process.env.ATLAS_URI || 'mongodb+srv://vanthieu97:thieu1997@cluster0-nzbrz.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const users = require('./users/users.controller');
app.use('/users', users)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
