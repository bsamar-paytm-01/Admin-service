import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { getConnection, getManager } from "typeorm";
import { User_status } from "../entity";
import { Error, Success } from "../response";
import axios from "axios";
import * as jwt from 'jsonwebtoken';
import {config} from '../config'
const adminAuth=async(req:Request,res:Response,next:NextFunction)=>{
    try{
            var token=req.cookies.session.token;
            var decoded = jwt.verify(token, config.auth.accessTokenSecret);
             next();
    }
    catch(err){
        next(Error.unauthorised("Unauthorised:invalid token,please login again"))
    }

};
export{
    adminAuth
}