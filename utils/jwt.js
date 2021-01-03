const jwt = require('jsonwebtoken');

const JWT_SECRET = 'some-vERy-secret-s!()ff-noon-can-think-of';

async function sign(user)
{
    return new Promise((resolve, reject)=>{
        jwt.sign({
            username: user.username,
            email: user.email
        },JWT_SECRET, (err, encoded)=>{
            if(err) return reject(err)
            else{
                resolve(encoded)
            }
        })
    })

}

async function decode(token)
{
    return new Promise((resolve, reject)=>{

        jwt.verify(token, JWT_SECRET, (err, decoded)=>{
            if(err)
            {
                return reject(err);
            }
            else
            {
                return resolve(decoded);
            }
        })
    })
}


async function runToken()
{
    const token = await sign({username: ''})
}