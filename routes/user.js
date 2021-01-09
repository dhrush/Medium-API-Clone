const router = require('express').Router();
const userControllers = require('../controllers/users');
const authByToken = require('../middleware/authorisation');

//GET    /user     login a user
router.get('/', authByToken, async(req, res)=>{ 
    const user = await userControllers.getUserByEmail(req.user.email);
    if(!user)
    {
        res.status(404).json({
            errors:{body:['No such user']}
        });
    }
    else
    {
        return res.status(200).json({user});
    }

});

//PATCH users/           update data of currrent user
router.patch('/', async(req, res)=>{

});

module.exports = router;