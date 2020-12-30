const User = require('../models/Users');
const hasher = require('../utils/password'); 


async function createUser(reqUsername, reqEmail, reqPassword)
{
    if(reqUsername & reqEmail & reqPassword)
    {

        try{
            User.findOne({username: reqUsername})
                .then(async (user)=>{
                    if(user){
                        //return res.status(400).json('User already exist with this username')
                        throw new Error('username can not be same');                    
                    }
                    else{
                        const hashedPassword = await hasher.hashPassword(reqPassword);                    
                        const newUser = new User({
                            username: reqUsername,
                            email: reqEmail,
                            password: hashedPassword,
                        });
    
                        newUser.save()
                            .then((user)=>{console.log(user)})
                            .catch(err=>console.log(err));
                        
                        return newUser;
                    }
                })
                .catch(err=>console.log(err));
            
        }
        catch(err){
            console.log(err);
        }
    }
    else{
        throw new Error('fields can not be blank');
    }
}

async function loginUer()
{

}

module.exports = {createUser, loginUer};