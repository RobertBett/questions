const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const User = mongoose.model('User');
const Answer = mongoose.model('Answer');

class QuestionController{
    index(req, res){
        Question.find({}).populate({path: 'user', model:'User'}).exec((err, question)=>{
            if(err){
                return res.json(err);
            }
            return res.json(question);
        })

    }

    show(req, res){
        Question.findById(req.params.id).populate({path:'answer', model: 'Answer' }).exec((err, question)=>{
            if(err){
                return res.json(err);
            }
            return res.json(question);
        })
    }

    create(req, res){
        Question.create({question: req.body.question, description: req.body.description, user: req.session.user_id},(err, question)=>{
            if(err){
                return res.json(err);
                console.log("errors but it works")
            }
            return res.json(question);
            console.log("you did it")
        })
    }

}
module.exports = new QuestionController();