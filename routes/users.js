const router = require('express').Router();
const usersController = require('../controllers/users');
//import {createUser} from '../controllers/users';

//POST /users/          CREATE A NEW USER
router.post('/', async(req, res)=>{
    try{
        const reqUsername = req.body.username;
        const reqEmail = req.body.email;
        const reqPassword = req.body.password;        
        const user = await usersController.createUser(reqUsername, reqEmail, reqPassword);
        res.status(201).json(user);                
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