const Users = require('../controllers/users');
const Answer = require('../controllers/answer');
const Question = require('../controllers/question');
const path = require('path');


module.exports = function(app){
    app.post('/users', Users.create);
    app.post('/login', Users.authenticate);
    app.delete('/users', Users.logout);
    app.get('/session', Users.session);

    app.post('/question', Question.create);
    app.get('/question', Question.index);
    app.get('/question/:id', Question.show);

    app.post('/answer/:id', Answer.createAnswer);
    app.get('/answer/:id', Answer.show);
    app.put('/answers/:id', Answer.update);


    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
}