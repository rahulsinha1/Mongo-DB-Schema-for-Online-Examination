module.exports = function () {
    const mongoose = require('mongoose');
    const MONGO_DB = 'mongodb://localhost:27017/whiteboard';
    mongoose.connect(MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true});
};