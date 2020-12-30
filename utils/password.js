const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

function hashPassword(password)
{
    return new Promise(
        (resolve, reject)=>{
            bcrypt.hash(password, SALT_ROUNDS, (err, encrypted)=>{
                if(err) return reject(err)

                resolve(encrypted);
            })
        }
    )
}

function matchPassword(hash, password)
{
    return new Promise(
        (resolve, reject)=>{
            bcrypt.compare(password, hash, (err, same)=>{
                if(err) return reject(err)

                resolve(same)
            })
        }
    )
}

module.exports = {hashPassword, matchPassword};
