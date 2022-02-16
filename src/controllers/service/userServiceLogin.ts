import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { getConnection, getManager } from "typeorm";
import { Error, Success } from "../../response";
import axios from "axios";
import{serviceToken} from "../../config"

const userServiceLogin=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        var login= await axios.post('http://127.0.0.1:3001/service/login',{}, {
            auth: {
                username: 'admin',
                password: 'password'
             }});
             serviceToken.user=login.data.token;
             next(Success.ok("user service logged in"))
    }   
    catch(err){
        next(Error.serverError("unknown error has occured"))
    }
};
export{
    userServiceLogin
}