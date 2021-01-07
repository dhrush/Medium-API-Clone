const router = require('express').Router();
const usersController = require('../controllers/users');

//POST /users/          CREATE A NEW USER
router.post('/', async(req, res)=>{
    try{      
        const newUser = await usersController.createUser(req.body.user);
        if(newUser) res.status(201).json(newUser);                
    }
    catch(err){
        console.log(err);
        return res.status(422).json({
            errors: {body: ['Could not create user', err.message]}
        })
    }
});

//POST /users/login         LOGIN AN EXISTING USER
router.post('/login', async(req, res)=>{
    try{
        const userLoging = await usersController.loginUser(req.body.user);
        if(userLoging)  res.status(200).json(userLoging);
    }
    catch(err){
        console.log(err);
        return res.status(422).json({
            errors: {body: ['Could not login user', err.message]}
        })
    }
})

module.exports = router;