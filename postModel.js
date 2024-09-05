const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    post:{
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tblog_users',
        required : true
    }
})

const postData = mongoose.model('postData', postSchema);
module.exports = postData;