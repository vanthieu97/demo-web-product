// const config = require('../config.json');
// const mongoose = require('mongoose');
// mongoose.connect(process.env.ATLAS_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true  });
// mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};