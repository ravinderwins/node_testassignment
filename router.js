const express = require('express');
let router = express.Router();

const homeController = require('./controllers/home.controller');

router.get('/', homeController.index);
router.get('/details/:id', homeController.details);
router.get('/post-question', homeController.postQuestion);
router.post('/post-question', homeController.saveQuestion);
router.post('/write-answer', homeController.writeAnswer);

router.get('/user-questions', homeController.userQuestions);

module.exports = router;