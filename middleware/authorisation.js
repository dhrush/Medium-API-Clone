//import {Request, Response, NextFunction} from 'express';
/*const expressIns = require('express');
const req = expressIns.request;
const res = expressIns.response;
const next = expressIns.NextFunction;*/
const jwtFunc = require('../utils/jwt');

async function authByToken(req, res, next)
{
    //check if authorisation header exists
    const authHeader = req.Header('Authorization').split(' ');
    if(!authHeader)
    {
        return res.status(401).json({
            errors:{body:['Authorisation failed', 'Not authorisation header']}
        })
    }

    //check if authorisation type is token
    if(authHeader!='Token') return res.status(401).json({
        errors:{body:['Authorisation failed', 'Token missing']}
    })

    //check if token is valid
    const token = authHeader[1];
    try
    {
        const user = await jwtFunc.decode(token);
        if(!user)   throw new Error('No user found in token');
        req.user = user;
        return next();
    }
    catch(e)
    {   
        res.status(401).json({
            errors:{body:['Authorisation failed', e.message]}
        })
    }
    
     
}

module.exports = authByToken;