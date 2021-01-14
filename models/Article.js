const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./Users');

const articleSchema = new Schema({
    slug: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tagList: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt:{
        type: Date,
        default: new Date(),
    },
    author: {
        type: Schema.ObjectId,
        ref: 'User'
    }
})

const Article = mongoose.model('ArticleCollection', articleSchema);
module.exports = Article;