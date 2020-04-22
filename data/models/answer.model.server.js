const mongoose = require('mongoose');
const answerSchema = require('./answer.schema.server');
module.exports = mongoose.model('AnswerModel', answerSchema);