const { sign } = require('jsonwebtoken');
const User = require('../models/Users');
const hasher = require('../utils/password'); 
const signToken = require('../utils/jwt');


async function createUser(userCredentials)
{
    if(!userCredentials.username)   throw new Error('username can not be blank');
    if(!userCredentials.email)   throw new Error('email can not be blank');
    if(!userCredentials.password)   throw new Error('password can not be blank');

    const req_email = userCredentials.email;
    let user = await User.findOne({username: req_email});
    if(user)
    {
        throw new Error('username can not be same');
        return;
    }
    else
    {
        const hashedPassword = await hasher.hashPassword(userCredentials.password);                    
        const newUser = new User({
            username: userCredentials.username,
            email: userCredentials.email,
            password: hashedPassword,
            image: userCredentials.image,
            //token: userCredentials.token
        });

        newUser.save()
            .then((user)=>{console.log(user)})
            .catch(err=>console.log(err));
        
        console.log('new user created @ controller is : '+newUser);
        newUser.token = await signToken.sign(userCredentials);
        return newUser;
    }
}

async function loginUser(userCredentials)
{
    //data validity
    if(!userCredentials.email)   throw new Error('email can not be blank');
    if(!userCredentials.password)   throw new Error('password can not be blank');

    //check if email exists
    const req_email = userCredentials.email;
    let user = await User.findOne({email: req_email});
    if(!user)
    {
        throw new Error('No user with this email exist');
        return;
    }

    //check if password matches
    const passMatch = await hasher.matchPassword(user.password, userCredentials.password);
    if(!passMatch)  throw new Error('Wrong password');

    userCredentials.token = await signToken(userCredentials);
    return user;
}

async function getUserByEmail(emailId)
{
    let userbyEmailId = await User.findOne({email: emailId});

    if(!userbyEmailId)
    {
        throw new Error('No user with this email exist');
        return;
    }

    return userbyEmailId;
}

module.exports = {createUser, loginUser, getUserByEmail};