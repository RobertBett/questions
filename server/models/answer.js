const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    answer:{
        type: String,
        required:[true, 'Answer must be at least three characters.'],
        minlength:[3,'Answer must be at least three characters']
    },
    suggestions:{
        type: String
    },
    like:{
        type:Number,
        default: 0
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},{timestamps:true});

mongoose.model('Answer', AnswerSchema);