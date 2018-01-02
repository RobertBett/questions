const mongoose = require('mongoose');
const Answer = mongoose.model('Answer');
const Question = mongoose.model('Question');
const User = mongoose.model('User');

class AnswerController{
    update(req,res){
        console.log('in in the answers contoller');
        Answer.findByIdAndUpdate(req.params.id,{$inc:{like:1}},{new:true},(err, answer)=>{
            if(err){
                return res.json(err);
            }
            return res.json(answer);
        })
    }

    createAnswer(req, res){
        Question.findById(req.params.id, function(err,question){
            if(err) {
                console.log(err)
            }else{
                var newAnswer = new Answer({
                    answer: req.body.answer,
                    like:0,
                    user: req.session.user_id,
                    suggestion: req.body.suggestion,
                });
                newAnswer.save(function(err){
                    if(err){
                        res.json(err)
                    } else{
                        question.answer.push(newAnswer)
                        question.save(function(err){
                            if(err){
                                console.log(err)
                            }else {
                            return res.json(newAnswer);
                            }

                        })

                    }
                })
            }
        })
    }



    show(req,res){
        Answer.findById(req.params.id, (err,answer)=>{
            if(err){
                return res.json(err);
            }
            return res.json(answer);
        })
    }
}

module.exports = new AnswerController();