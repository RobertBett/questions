const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required:[true, "Question must  be at least 10  Characters"],
        minlength:[10, 'Question must be at least 10 Characters']
    },
    description:{
        type: String,
    },
    answer:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Answer',
    }],
     user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
     }
},{timestamps: true});

mongoose.model('Question', QuestionSchema);