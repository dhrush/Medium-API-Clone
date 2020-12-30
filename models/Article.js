const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = requrie('./Users');

const articleSchema = new Schema({
    title: String,
    description: String,
    body: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt:{
        type: Date,
        default: new Date(),
    },
    author: User,
})

const Article = mongoose.model('ArticleCollection', articleSchema);
module.exports = Article;