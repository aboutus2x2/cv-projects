const mongoose = require('mongoose')
const {model, Schema} = mongoose;

let no = 0

const schema = new Schema({
    name: {
        type: String, index: true, default: () => {
            return '学生' + no++
        }
    },
    sex: {type: String, index: true},
    score: {type: Number, index: true}
}, {timestamps: true});

module.exports = model('student', schema)