const {model, Schema} = require('mongoose')

const schema = new Schema({
    x: {type: Number, index: true},
    y: {type: Number, index: true},
    sum: {type: Number, index: true}
}, {timestamps: true});

module.exports = model('add', schema)