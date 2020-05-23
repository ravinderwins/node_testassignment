class HomeService {
    constructor() {
        this.questions = [{
            id: 1,
            userId: 1,
            userName: "John Doe",
            title: 'What is nodejs?',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            date: new Date(),
            answers: [{
                answerId: 1,
                userId: 2,
                userName: "Marry",
                answer: "Node js is runtime environment for JavaScript",
                date: new Date(),
            }]
        }, {
            id: 2,
            userId: 2,
            title: 'What is expressjs?',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            date: new Date(),
            answers: []
        }]
    }

    getAllQuestions() {
        return this.questions;
    }

    getUserQuestions(userId) {
        return this.questions.filter(q => q.userId == userId);
    }

    getQuestionDetails(id) {
        return this.questions.find(q => q.id == id);
    }

    saveQuestion(data) {
        const totalNumberOfQuestion = this.questions.length;
        let id = totalNumberOfQuestion > 0 ?
            this.questions[totalNumberOfQuestion - 1].id :
            0;

        let latestId = id + 1
        data.id = latestId;
        data.date = new Date();
        data.answers = [];

        this.questions.push(data);
        return latestId;
    }

    writeAnswer(id, data) {
        let qIndex = this.questions.findIndex(q => q.id == id);
        let questionDetails = this.questions[qIndex];

        const totalNumberOfAnswers = questionDetails.answers.length;
        
        let answerId = totalNumberOfAnswers > 0 ?
            questionDetails.answers[totalNumberOfAnswers - 1].answerId :
            0;

        let latestId = answerId + 1;
        data.answerId = latestId;
        data.date = new Date();

        this.questions[qIndex].answers.push(data);

        return latestId;
    }
}

module.exports = new HomeService();