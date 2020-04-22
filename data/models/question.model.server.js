const mongoose = require('mongoose');
const questionSchema = require('./question.schema.server');
module.exports = mongoose.model('QuestionModel', questionSchema);