const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI || 'mongodb+srv://vanthieu97:thieu1997@cluster0-nzbrz.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const accountsRouter = require('./routes/accounts');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/accounts', accountsRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
