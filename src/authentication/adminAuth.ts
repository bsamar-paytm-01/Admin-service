import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { getConnection, getManager } from "typeorm";
import { User_status } from "../entity";
import { Error, Success } from "../response";
import axios from "axios";
import * as jwt from 'jsonwebtoken';
import {config, serviceToken} from '../config'

const adminAuth=async(req:Request,res:Response,next:NextFunction)=>{
    try{
            var token=req.cookies.session.token;
            var decoded = jwt.verify(token, config.auth.accessTokenSecret);
            var userServiceResponse= await axios.post('http://127.0.0.1:3001/admin/verify', {
                jwt: token,
                 },{
                    auth: {
                        username: '',
                        password: serviceToken.user
                     }});
            
            if(userServiceResponse.data.status==200)
            {
                next();
            }
            else
            {
                throw "error"
            }
    }
    catch(err){
        next(Error.unauthorised("Unauthorised:invalid token,please login again"))
    }

};
export{
    adminAuth
}