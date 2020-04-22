const mongoose = require('mongoose');
const multipleChoiceSchema = require('./multiple-choice.schema.server');
const trueFalseSchema = require('./true-false.schema.server');
module.exports = mongoose.Schema({ _id: Number, question: String, points: Number, questionType: {type: String, enum: ["MULTIPLE_CHOICE", "TRUE_FALSE"]},
                 multipleChoice: multipleChoiceSchema, trueFalse: trueFalseSchema}, {collection: 'questions'});
