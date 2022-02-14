import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { getConnection, getManager } from "typeorm";
import { User_status } from "../entity";
import { Error, Success } from "../response";

const userStatus=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        var user =await  getManager().findOne(User_status,{
            where: { id:req.params.id }
            });
            if(!user)
            {
                next(Error.notFound("user not found"))
            }
            else
            {
            if(user.status===0){
                next(Success.ok("user has not been verified"))
            }
            else if(user.status===1) {
                next(Success.ok("user has been verified"))
            }
            else if(user.status=== -1) {
                next(Success.ok("user has been rejected"))
            }
        
            next(Error.serverError("unknown error"))
            }
    }
    catch(err)
    {
        next(Error.serverError("unknown error"))
    }
};

export{
    userStatus
}