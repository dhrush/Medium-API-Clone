const User = require('../models/Users');


async function createUser(reqUsername, reqEmail)
{
    try{
        User.findOne({username: reqUsername})
            .then((user)=>{
                if(user){
                    return res.status(400).json('User already exist with this username')
                }
                else{
                    const newUser = new User({
                        username: reqUsername,
                        email: reqEmail
                    });

                    newUser.save()
                        .then((user)=>{console.log(user)})
                        .catch(err=>console.log(err));
                    
                    return newUser;
                }
            })
        
    }
    catch(err){
        console.log(err);
    }
}

async function loginUer()
{

}

module.exports = {createUser, loginUer};