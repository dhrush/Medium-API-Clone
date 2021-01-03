const User = require('../models/Users');
const hasher = require('../utils/password'); 


async function createUser(userCredentials)
{
    /*try{
        const req_username = userCredentials.username;
        User.findOne({username: req_username})
            .then(async(user)=>{
                if(user){                    
                    throw new Error('username can not be same');                    
                }
                else{
                    const hashedPassword = await hasher.hashPassword(userCredentials.password);                    
                    const newUser = new User({
                        username: userCredentials.username,
                        email: userCredentials.email,
                        password: hashedPassword,
                    });

                    newUser.save()
                        .then((user)=>{console.log(user)})
                        .catch(err=>console.log(err));
                    
                    console.log('new user created @ controller is : '+newUser);
                    return newUser;
                }  
            })
            .catch(err=>console.log(err));
        
    }
    catch(err){
        console.log(err);
    }*/
    const req_username = userCredentials.username;
    let user = await User.findOne({username: req_username});
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
            token: userCredentials.token
        });

        newUser.save()
            .then((user)=>{console.log(user)})
            .catch(err=>console.log(err));
        
        console.log('new user created @ controller is : '+newUser);
        return newUser;
    }
}

async function loginUer()
{

}

module.exports = {createUser, loginUer};