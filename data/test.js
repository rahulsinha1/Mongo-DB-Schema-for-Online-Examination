require("./db")();
const universityDao = require('./daos/university.dao.server');

universityDao.truncateDatabase()
    .then(() => universityDao.populateDatabase())
    .then(() => universityDao.findAllStudents())
    .then(() => testStudentsInitialCount())
    .then(() => testQuestionsInitialCount())
    .then(() => testAnswersInitialCount())
    .then(() => testDeleteAnswer())
    .then(() => testDeleteQuestion())
    .then(() => testDeleteStudent());


const testStudentsInitialCount = () => {
    return universityDao.findAllStudents()
          .then(result => console.log("Initial number of students " + result.length))
};

const testQuestionsInitialCount = () => {
    return universityDao.findAllQuestions()
           .then(result => console.log("Initial number of Questions: " + result.length))
};

const testAnswersInitialCount = () => {
    return universityDao.findAllAnswers()
            .then(result => console.log("Initial number of Answers: " + result.length))
};

const testDeleteAnswer = () => {
    universityDao.deleteAnswer(890)
        .then(() => universityDao.findAllAnswers())
        .then(allAnswers => {
            console.log("Total number of answers after removing Bob's answer: " + allAnswers.length);
            return universityDao.findAnswersByStudent(234)
            })
        .then(bobsAnswer => console.log("Bob's total number of answers after deleting one answer: " + bobsAnswer.length))
};

const testDeleteQuestion = () => {
    universityDao.deleteQuestion(321)
        .then(() => universityDao.findAllQuestions())
        .then(allQuestions => console.log("Deleted one true false question \n Total number of questions now: " + allQuestions.length))
};

const testDeleteStudent = () => {
    universityDao.deleteStudent(234)
        .then(() => universityDao.findAllStudents())
        .then(allStudents => console.log("Deleted Bob \n Total No of students now is : " + allStudents.length))
};