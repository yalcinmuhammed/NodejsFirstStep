const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;

var examSchema = new Schema({
    name:{
        type: String,
        default: null
    },
    shortName:{
        type: String,
        default: null
    },
    lectureList:[
        {
            name:{
                type: String,
                default: null
            },
            subjectList:[
                {
                    name:{
                        type: String,
                        default: null
                    }
                }
            ]
        }
    ],
    content:{
        type: String,
        default: null
    },
    imageURL:{
        type: String,
        default: null
    }
});

examSchema.plugin(timestamps);

module.exports = mongoose.model('exams', examSchema);