const router = require('express').Router();
const articleControllers = require('../controllers/articles');
const authByToken = require('../middleware/authorisation');

//GET /api/articles/        list articles
router.get('/', async(req, res)=>{

});


//GET /api/articles/feed     get article feed that is user specific
router.get('/feed', authByToken, async(req, res)=>{

});


//GET /api/article/:slug     get  article by slug
router.get('/:slug', async(req, res)=>{

})


//POST /api/articles         CREATE new Article
router.post('/', authByToken, async(req, res)=>{
    try{
        const article = await articleControllers.createArticle(req.body.article, req.user.email);
        if(article) res.status(201).json({article}); 
    }
    catch(err){
        console.log(err);
        return res.status(422).json({
            errors: {body: ['Could not create article', err.message]}
        })
    }
});


//PATCH /api/articles/:slug     update the article
router.patch('/:slug', authByToken, async(req, res)=>{

});


//DELETE /api/articles/:slug    delete the article
router.delete('/:slug', authByToken, async(req, res)=>{

});

module.exports = router;