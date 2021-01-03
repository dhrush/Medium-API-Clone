const router = require('express').Router();
const usersController = require('../controllers/users');

//POST /users/          CREATE A NEW USER
router.post('/', async(req, res)=>{
    try{
        /*const reqUsername = req.body.user.username;
        const reqEmail = req.body.user.email;
        const reqPassword = req.body.user.password;*/        
        const newUser = await usersController.createUser(req.body.user);
        console.log('new user from route is: '+newUser);
        if(newUser) res.status(201).json(newUser);                
    }
    catch(err){
        console.log(err);
        return res.status(422).json({
            errors: {body: ['Could not create user', err.mess]}
        })
    }
});

//POST /users/login         LOGIN AN EXISTING USER
router.post('/login', (req, res)=>{

})

module.exports = router;