import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { getConnection, getManager } from "typeorm";
import { User_status } from "../entity";
import { Error, Success } from "../response";

const userRegistration=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        var newUser=new User_status();
        newUser.id=req.body.idUser;
        newUser.name=req.body.name;
        newUser.email=req.body.email;
        newUser.phoneNumber=req.body.phoneNumber;
        newUser.role=req.body.role;
        newUser.status=req.body.isVerified;

        await getManager().save(newUser);
        next(Success.accepted("user has been added:registration pending"))
    }
    catch(err)
    {
        next(Error.serverError("unknown error has occured"))
    }

};

export{
    userRegistration
}