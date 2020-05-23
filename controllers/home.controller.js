const homeService = require('../services/home.service');

class HomeController {
    // Loading List of Questions
    index(req, res) {
        let questions = homeService.getAllQuestions();
        res.render('home/index', { questions });
    }

    userQuestions(req, res) {
        let questions = homeService.getUserQuestions(1);
        res.render('home/user-questions', { questions });
    }

    details(req, res) {
        const { id } = req.params;
        var question = homeService.getQuestionDetails(id);
        res.render('home/details', question);
    }

    postQuestion(req, res) {
        res.render('home/create');
    }

    // Post question
    saveQuestion(req, res) {
        console.log(req.body);
        let view = 'home/create';

        let { title, description } = req.body;
        if (!title || !description) res.render(view, { error: 'Title and description are required fields' });

        let data = {
            title: title,
            description: description,
            userId: 1,
            userName: "John Doe"
        };

        let questionId = homeService.saveQuestion(data);
        res.render(view, { id: questionId, success: "Question posted successfully" });
    }

    writeAnswer(req, res) {
        let view = 'home/create';

        let { id, answer } = req.body;

        if (!id) res.render(view, { error: 'Question not exist' });
        if (!answer) res.render(view, { error: 'Please write answer' });

        let data = {
            answer: answer,
            userId: 1,
            userName: "John Doe"
        };

        homeService.writeAnswer(id, data);

        res.redirect('/details/' + id);
    }
}

module.exports = new HomeController();