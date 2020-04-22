const mongoose = require('mongoose');

const quizSchema = require('./quiz.schema.server');

module.exports = mongoose.model('QuizModel', quizSchema);
