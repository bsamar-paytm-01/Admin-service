import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { getConnection, getManager, getRepository } from "typeorm";
import { User_status } from "../entity";
import { Error, Success } from "../response";
import axios from "axios";
import { serviceToken } from "../config";
import {otpSend} from "../authentication"
const adminLoginOtp=async(req:Request,res:Response,next:NextFunction)=>{

    try{
        var email=req.body.email;
        await otpSend(email);
        next(Success.ok("OTP mail has meen sent"))
    }
    catch(err){
        next(Error.serverError("could not send mail : please try again later"))
    }

};

export{
    adminLoginOtp
}