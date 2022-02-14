import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { getConnection, getManager } from "typeorm";
import { User_status } from "../entity";
import { userRegistration } from "./userRegistration";
import { userStatus } from "./userStatus";
import axios from "axios";
import { Error, Success } from "../response";

const userVerification=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        
            var id =parseInt(req.body.id);
            var status =parseInt(req.body.status);
            const user = await getManager().findOne(User_status,{ where: {id:id} });
            if(!user){
                next(Error.notFound("user was not found"))
            }
            else{
                user.status=status;
                await getManager().save(user);
                await axios.post('http://127.0.0.1:3001/user/setStatus', {
                    idUser: id,
                    status: status
                  });
                  next(Success.ok("the request has been fullfilled"));
            }
    }
    catch(err)
    {
        next(Error.serverError("Unkown error"))
    }

};

export{
    userVerification
}