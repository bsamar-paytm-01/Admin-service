import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { getConnection, getManager } from "typeorm";
import { User_status } from "../entity";
import { Error, Success } from "../response";
import axios from "axios";
import { serviceToken } from "../config";

const adminSignUp=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        var newAdmin={...req.body}
        newAdmin.role='admin';
        console.log(newAdmin);
         var userServiceResponse=await axios.post('http://127.0.0.1:3001/admin/register',newAdmin,{
            auth: {
                username: '',
                password: serviceToken.user
             }})
         console.log(userServiceResponse.data);
         if(userServiceResponse.data.status===200){
             next(Success.accepted("request has been accepted:Registartion is pending"))
         }
         else{
            throw "error";
         }
    }   
    catch(err){
        next(Error.serverError("unknown error has occured"))
    }
};
export{
    adminSignUp
}