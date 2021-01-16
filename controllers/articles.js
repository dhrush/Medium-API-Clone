const Article = require('../models/Article');
const User = require('../models/Users');
const slugify = require('../utils/stringUtils');

async function createArticle(data, email)
{
    if(!data.title) throw new Error('Title not present');
    if(!data.body) throw new Error('Body not present');
    if(!data.description) throw new Error('Description not present');

    try{
        //checking if user exist
        const user = await User.findOne({email:email});
        if(!user)   throw new Error('User does not exist');

        let newArticle = new Article({
            slug: slugify(data.title),
            title: data.title,
            description: data.description,
            body: data.body,
            taglist: data.taglist,
            author: email, 
        });

        newArticle.save()
            .then((user)=>{console.log(user)})
            .catch(err=>console.log(err));

        return newArticle;
    }
    catch(e){
        console.log('error in article route is', e);
    }
}

async function deleteArticle()
{

}

async function updateArticle()
{

}

async function getAllArticle()
{

}

async function getFeedArticle()
{

}

async function getArticleBySlug()
{

}

module.exports = {createArticle, deleteArticle, getAllArticle, updateArticle, getFeedArticle, getArticleBySlug};